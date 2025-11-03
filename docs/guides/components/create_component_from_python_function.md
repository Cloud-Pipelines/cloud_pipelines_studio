# Create a component from a Python function

## What is a pipeline component?

A pipeline consists of component tasks connected together in a graph.

Components have inputs and outputs.
Component reads the input data, processes it and outputs the results.
Output of one component can be passed to another component's input.
That's how components are connected together to form a pipeline.

Each component has an interface (input and output definitions), an implementation (usually a containerized command-line program) and metadata (component name, description and other optional properties).

The components are saved in ComponentSpec format files (`component.yaml`) that can be shared anywhere on the Internet.
When building a pipeline, several components can be loaded from `component.yaml` files and connected together to form a pipeline.

Container components are based on containerized command-line programs.
But that does not mean that creating a component always involves building new container images or writing command-line programs.
There is a way to automatically generate a component from a Python function without a need to build any container images.

## Creating a component from a Python function

Creating a component from a Python function is very easy (1 line of code).
(However the function needs to follow several simple rules.)
_Do not forget to install the [Cloud Pipelines SDK](https://pypi.org/project/cloud-pipelines/):_ `pip install cloud-pipelines`.

### Simple example

Let's start with an example.
This is a simple python function:

```python
def add(a: int, b: int) -> int:
    return a + b
```

It's a normal Python function.
There is nothing in this function that is specific to Cloud Pipelines.
However this function can be converted to a pipeline component using the `pipelines.components.create_component_from_func` function from the [Cloud Pipelines SDK](https://pypi.org/project/cloud-pipelines/):

<!-- TODO: Add link to the SDK documentation. -->

```python
from pipelines.components import create_component_from_func

add_op = create_component_from_func(
    func=add,
    output_component_file="component.yaml",
)
```

### Reading and writing files.

Let's look at a more complex example.
This function filters a text file by searching for a certain string pattern and returns only the matching lines.

```python
def filter_text(
    text_path: InputPath(),
    filtered_text_path: OutputPath(),
    pattern: str,
):
    import re
    with open(text_path, 'r') as reader:
        with open(filtered_text_path, 'w') as writer:
            for line in reader:
                if re.search(pattern, line):
                    writer.write(line)

# Creating a component
filter_text_op = create_component_from_func(
    func=filter_text,
    output_component_file="component.yaml",
)
```

This function reads the data from a file (`text_path`) and writes the data to a file (`filtered_text_path`).
Such path parameters need to be annotated using the `InputPath()` and `OutputPath()` annotations.
Also note that the `import` statement is placed inside the function.
This is needed so that the component function is self-contained.

### The `InputPath` and `OutputPath` annotations

The `text_path: InputPath()` annotation tells the system that the input data for the `text` input should be placed into some file and the path of that file should be given to the function as a value for the `text_path` function parameter.

The `filtered_text_path: OutputPath()` annotation tells the system that it should generate and give the function a path (via the `filtered_text_path` parameter) where the function should write the output data.
After the function finishes the execution, the system will take the output data written by the function, put it into storage and make it available for passing to other components.

#### Why do we need the `InputPath` parameter annotation?

Not all data can be passed/received as a simple string.
Examples: binary data, large data, directories.
In all these cases, the code should read data from a file or directory pointed to by a path.
This is why we have a `text_path: InputPath()` parameter and not `text: str` parameter (although the latter could still work for short texts).
Another reason why the `InputPath` annotation is needed is that the component function code is executed inside a hermetic container.
The text file needs to somehow be placed inside the container.
Only the system can do that.
The `text_path: InputPath()` annotation tells the system that the input data for the `text` input should be placed into some file and the path of that file should be given to the function as a value for the `text_path` function parameter.

Similarly the `filtered_text_path: OutputPath()` parameter annotation is needed so that the system knows that it needs to get the output data out of the container when the function finishes its execution.

### Default parameter values

The `create_component_from_func` function supports functions with default parameter values.
This results in the generated component inputs becoming optional.

Path parameters annotated with `InputPath()` can have a default value of `None` which makes those file inputs optional.

The default parameter values can use any Python built-in type.
(Only the built-in types can be used because the function needs to remain self-contained).

```python
def some_func(
    some_int: int = 3,
    some_path: InputPath() = None,
):
    from pathlib import Path
    if some_path:
        Path(some_path).read_text()
    ...
```

<!-- TODO: Directories -->

<!-- TODO: Multiple outputs -->

### Mapping function parameters to inputs and outputs

The function parameters (the parameter names and type annotations) are mapped to component inputs and outputs in a certain way.

This example demonstrates all aspects of the mapping

```python
def my_func(
    # Directly supported types:
    # Mapped to input with name "some_string" and type "String"
    some_string: str,
    # Mapped to input with name "some_string" and type "Integer"
    some_integer: int,
    # Mapped to input with name "some_float" and type "Float"
    some_float: float,
    # Mapped to input with name "some_boolean" and type "Boolean"
    some_boolean: bool,
    # Mapped to input with name "some_list" and type "JsonArray"
    some_list: list,
    # Mapped to input with name "some_dict" and type "JsonObject"
    some_dict: dict,

    # Mapped to input with name "any_thing" and no type (compatible with any type. Will receive a string value at runtime!)
    any_thing,

    # Other types
    # Mapped to input with name "some_uri" and type "Uri" (Will receive a string value at runtime!)
    some_uri: "Uri",
    # Mapped to input with name "some_uri" and type "BigInt" (Will receive a string value at runtime!)
    some_uri: BigInt,

    # Paths:
    # Mapped to input with name "input1" (the "_path" suffix is removed)
    input1_path: InputPath(""),
    # Mapped to output with name "output1" and type "CSV" (the "_path" suffix is removed)
    output1_path: OutputPath("CSV"),
) -> typing.NamedTuple("Outputs", [
    # Mapped to output with name "output_string" and type "String"
    ("output_string", str),
    # Mapped to output with name "output_uri" and type "Uri" (function needs to return a string)
    ("output_uri", "Uri"),
]):
    ...
    return ("Some string", "some-uri://...")
```

### Supported types

The `create_component_from_func` function supports functions with any type annotations (including arbitrary type name annotations).
However only a few basic Python types are handled in a special way where the SDK supports automatic data serialization and deserialization.

The full list of directly supported basic Python types is: `str`, `int`, `float`, `bool`, `list`, `dict`.
Plus the special annotations for input and output paths: `InputPath(...)` and `OutputPath(...)`.
All other types can still be used, but they are not automatically deserialized, so the Python component function code receives the parameter values as strings.
For example, with the `param1: BigInt` or `param1: "BigInt"` parameter type annotation, the function will receive a plain `str` object.

### Advanced component configuration

#### Python packages

A Python component can dynamically install Python packages before running the component function.
To specify the packages, use the `packages_to_install` parameter of the `create_component_from_func` function:
`create_component_from_func(..., packages_to_install=["pandas==1.14.0"])`.
Each item follows the `pip install` syntax.

#### Base container image

All container components are executed inside a Docker container.
By default the official `python` container image is used.
To explicitly specify the container image, use the `base_image` parameter of the `create_component_from_func` function: `create_component_from_func(..., base_image="tensorflow/tensorflow:2.8")`.
Choose a container image that has all or most of the Python packages that you need, to reduce the startup time and the number of packages that need to be dynamically installed using `packages_to_install`.

```python
filter_text_op = create_component_from_func(
    func=filter_text,
    output_component_file="component.yaml",
    base_image="tensorflow/tensorflow:2.8",
    packages_to_install=["pandas==1.14.0"],
)
```

<!-- TODO: annotations -->

### Rules

#### The function must be standalone (self-contained)

The function source code is copied to the generated component.
Any code outside of the function definition will be left out.
So the function must be self-contained.

The function should import all modules inside the function body.
The function can only call functions and use classes from the imported modules.
For example, the component function cannot call a sibling function.
Fortunately, in Python any code can be placed inside a function: imports, other functions, classes:

```python
def my_func():
    import helper_module

    def inner_func():
        ...

    class InnerClass:
        ...

    helper_module.foo()
    inner_func()
    obj = InnerClass()
```

### Component guidelines

#### Components should be "pure"

The output of a component should only depend on the input values passed to the component.

#### Avoid reading/changing mutable external global state

Such components are not pure and have complicated interdependencies and race condition issues that the system cannot know about.

As an example, **avoid** components like this:
`Change object in some external system`
`Delete object in some external system`

A `Create object in some external system` component is OK as long as the resulting object is immutable (does not change in the future).

#### Component name should start with a verb

Components are function, operations, transformations.
Component names are easier to understand when they start with a verb instead of being a noun.
Example: `train_model` instead of `trainer`.
