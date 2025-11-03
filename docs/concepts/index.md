# Concepts

## Components, Tasks, Executions

### Analogy with functions

Component ≈ function definition

```python
def my_add(a: int, b: int) -> int:
    return a + b
```

Task ≈ function call code line

```python
task1 = my_add(a=x, b=y)
```

Execution ≈ function call execution

```python
my_add(a=3, b=5) >>> 8
```

### Components

- Follow the ComponentSpec format
- Saved in component.yaml files
- Can be shared anywhere (GitHub, Web, etc)
- Can be imported and used to build a pipeline

#### Component specification

Component specification consists of:

- Metadata
 	- Name, description, annotations
- Interface (~= function signature)
 	- Input and Output specs. Name, type, description, optional, default value.
- Implementation (~= function body)
 	- Container or graph implementation
 	- Container implementation:
  		- Container image
  		- Command-line with structural placeholders

### Tasks

Task is analogous to a "function call"

Task = Component reference + input Arguments (+ Additional configuration).

There can be multiple tasks that use same component in a single pipeline.

### Executions

Executions is analogous to a "function call execution at runtime".

Execution = Task + actual input/outputs artifacts, execution metadata (start/end time, launcher-specific information), logs, program exit code etc
