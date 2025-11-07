---
id: schema
title: Component Schema Reference
---

# ComponentSpec Reference Guide

The ComponentSpec format is the standard specification for defining reusable machine learning pipeline components. This guide covers all aspects of the ComponentSpec schema, from basic structure to advanced features.

## Overview

A ComponentSpec defines a reusable component that can be executed as part of a machine learning pipeline. A container component follows this structure:

<div className="language-yaml" style={{backgroundColor: '#f6f8fa', padding: '16px', overflow: 'auto', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5'}}>
<span style={{display: 'block'}}>&lt;<a href="#componentspec">ComponentSpec</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '20px'}}>name: string</span>
<span style={{display: 'block', marginLeft: '20px'}}>description: string</span>
<span style={{display: 'block', marginLeft: '20px'}}>metadata:</span>
<span style={{display: 'block', marginLeft: '40px'}}>annotations: Map[string, any]</span>
<span style={{display: 'block', marginLeft: '20px'}}>inputs: #<a href="#inputspec">InputSpec</a>[]</span>
<span style={{display: 'block', marginLeft: '40px'}}>&lt;<a href="#inputspec">InputSpec[]</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '60px'}}>name: string</span>
<span style={{display: 'block', marginLeft: '60px'}}>type: <a href="#typespectype">TypeSpecType</a></span>
<span style={{display: 'block', marginLeft: '60px'}}>description: string</span>
<span style={{display: 'block', marginLeft: '60px'}}>default: string</span>
<span style={{display: 'block', marginLeft: '60px'}}>optional: boolean</span>
<span style={{display: 'block', marginLeft: '60px'}}>annotations: Map[string, any]</span>
<span style={{display: 'block', marginLeft: '20px'}}>outputs: #<a href="#outputspec">OutputSpec</a>[]</span>
<span style={{display: 'block', marginLeft: '40px'}}>&lt;<a href="#outputspec">OutputSpec[]</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '60px'}}>name: string</span>
<span style={{display: 'block', marginLeft: '60px'}}>type: <a href="#typespectype">TypeSpecType</a></span>
<span style={{display: 'block', marginLeft: '60px'}}>description: string</span>
<span style={{display: 'block', marginLeft: '60px'}}>annotations: Map[string, any]</span>
<span style={{display: 'block', marginLeft: '20px'}}>implementation: #<a href="#implementationtype">ImplementationType</a></span>
<span style={{display: 'block', marginLeft: '40px'}}>&lt;oneOf&gt;:</span>
<span style={{display: 'block', marginLeft: '60px'}}>&lt;<a href="#containerimplementation">ContainerImplementation</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '80px'}}>container: #<a href="#containerspec">ContainerSpec</a></span>
<span style={{display: 'block', marginLeft: '100px'}}>image: <a href="#stringorplaceholder">StringOrPlaceholder</a></span>
<span style={{display: 'block', marginLeft: '100px'}}>command: #<a href="#stringorplaceholder">StringOrPlaceholder</a>[]</span>
<span style={{display: 'block', marginLeft: '120px'}}>&lt;oneOf&gt;:</span>
<span style={{display: 'block', marginLeft: '140px'}}>string:</span>
<span style={{display: 'block', marginLeft: '140px'}}>&lt;<a href="#inputvalueplaceholder">InputValuePlaceholder</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '160px'}}>inputValue: string</span>
<span style={{display: 'block', marginLeft: '140px'}}>&lt;<a href="#inputpathplaceholder">InputPathPlaceholder</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '160px'}}>inputPath: string</span>
<span style={{display: 'block', marginLeft: '140px'}}>&lt;<a href="#outputpathplaceholder">OutputPathPlaceholder</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '160px'}}>outputPath: string</span>
<span style={{display: 'block', marginLeft: '140px'}}>&lt;<a href="#concatplaceholder">ConcatPlaceholder</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '160px'}}>concat: <a href="#stringorplaceholder">StringOrPlaceholder</a>[]</span>
<span style={{display: 'block', marginLeft: '140px'}}>&lt;<a href="#ifplaceholder">IfPlaceholder</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '160px'}}>if:</span>
<span style={{display: 'block', marginLeft: '180px'}}>cond: <a href="#ifconditionargumenttype">IfConditionArgumentType</a></span>
<span style={{display: 'block', marginLeft: '180px'}}>then: <a href="#stringorplaceholder">StringOrPlaceholder</a>[]</span>
<span style={{display: 'block', marginLeft: '180px'}}>else: <a href="#stringorplaceholder">StringOrPlaceholder</a>[]</span>
<span style={{display: 'block', marginLeft: '100px'}}>args: <a href="#stringorplaceholder">StringOrPlaceholder</a>[]</span>
<span style={{display: 'block', marginLeft: '100px'}}>env: Map[str, <a href="#stringorplaceholder">StringOrPlaceholder</a>]</span>
<span style={{display: 'block', marginLeft: '60px'}}>&lt;<a href="#graphimplementation">GraphImplementation</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '80px'}}>graph: #<a href="#graphspec">GraphSpec</a></span>
<span style={{display: 'block', marginLeft: '100px'}}>outputValues: Map string -&gt; <a href="#taskoutputargument">TaskOutputArgument</a></span>
<span style={{display: 'block', marginLeft: '100px'}}>tasks: #Map string -&gt; <a href="#taskspec">TaskSpec</a></span>
<span style={{display: 'block', marginLeft: '120px'}}>&lt;<a href="#taskspec">TaskSpec</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '140px'}}>componentRef: #<a href="#componentreference">ComponentReference</a></span>
<span style={{display: 'block', marginLeft: '160px'}}>name: string</span>
<span style={{display: 'block', marginLeft: '160px'}}>digest: string</span>
<span style={{display: 'block', marginLeft: '160px'}}>tag: string</span>
<span style={{display: 'block', marginLeft: '160px'}}>url: string</span>
<span style={{display: 'block', marginLeft: '160px'}}>spec: <a href="#componentspec">ComponentSpec</a></span>
<span style={{display: 'block', marginLeft: '140px'}}>arguments: #Map string -&gt; <a href="#argumenttype">ArgumentType</a></span>
<span style={{display: 'block', marginLeft: '160px'}}>&lt;<a href="#argumenttype">ArgumentType</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '180px'}}>&lt;oneOf&gt;:</span>
<span style={{display: 'block', marginLeft: '200px'}}>string:</span>
<span style={{display: 'block', marginLeft: '200px'}}>&lt;<a href="#graphinputargument">GraphInputArgument</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '220px'}}>graphInput:</span>
<span style={{display: 'block', marginLeft: '240px'}}>inputName: string</span>
<span style={{display: 'block', marginLeft: '240px'}}>type: <a href="#typespectype">TypeSpecType</a></span>
<span style={{display: 'block', marginLeft: '200px'}}>&lt;<a href="#taskoutputargument">TaskOutputArgument</a>&gt;:</span>
<span style={{display: 'block', marginLeft: '220px'}}>taskOutput:</span>
<span style={{display: 'block', marginLeft: '240px'}}>taskId: string</span>
<span style={{display: 'block', marginLeft: '240px'}}>outputName: string</span>
<span style={{display: 'block', marginLeft: '240px'}}>type: <a href="#typespectype">TypeSpecType</a></span>
<span style={{display: 'block', marginLeft: '140px'}}>isEnabled: <a href="#predicatetype">PredicateType</a></span>
<span style={{display: 'block', marginLeft: '140px'}}>executionOptions: #<a href="#executionoptionsspec">ExecutionOptionsSpec</a></span>
<span style={{display: 'block', marginLeft: '160px'}}>retryStrategy: #<a href="#retrystrategyspec">RetryStrategySpec</a></span>
<span style={{display: 'block', marginLeft: '180px'}}>maxRetries: integer</span>
<span style={{display: 'block', marginLeft: '160px'}}>cachingStrategy: #<a href="#cachingstrategyspec">CachingStrategySpec</a></span>
<span style={{display: 'block', marginLeft: '180px'}}>maxCacheStaleness: string</span>
<span style={{display: 'block', marginLeft: '140px'}}>annotations: Map[string, any]</span>
</div>

## Component Specification Schema Reference

This document describes all definitions in the Component Specification JSON Schema.

:::note
You can see original ComponentSpec in https://github.com/Cloud-Pipelines/component_spec_schema/blob/master/component_spec.json_schema.json
:::

### TypeSpecType

Defines the type system for component inputs and outputs.

| Property | Type                 | Required | Description                                                            |
| -------- | -------------------- | -------- | ---------------------------------------------------------------------- |
| -        | `string` \| `object` | -        | Either a string type name or an object with nested type specifications |

### InputSpec

Describes the component input specification.

| Property    | Type                            | Required | Description                                    |
| ----------- | ------------------------------- | -------- | ---------------------------------------------- |
| name        | `string`                        | Yes      | Name of the input                              |
| type        | [`TypeSpecType`](#typespectype) | No       | Type specification for the input               |
| description | `string`                        | No       | Description of the input                       |
| default     | `string`                        | No       | Default value for the input                    |
| optional    | `boolean`                       | No       | Whether the input is optional (default: false) |
| annotations | `object`                        | No       | Additional metadata annotations                |

### OutputSpec

Describes the component output specification.

| Property    | Type                            | Required | Description                       |
| ----------- | ------------------------------- | -------- | --------------------------------- |
| name        | `string`                        | Yes      | Name of the output                |
| type        | [`TypeSpecType`](#typespectype) | No       | Type specification for the output |
| description | `string`                        | No       | Description of the output         |
| annotations | `object`                        | No       | Additional metadata annotations   |

### InputValuePlaceholder

Represents the command-line argument placeholder that will be replaced at run-time by the input argument value.

| Property   | Type     | Required | Description       |
| ---------- | -------- | -------- | ----------------- |
| inputValue | `string` | Yes      | Name of the input |

### InputPathPlaceholder

Represents the command-line argument placeholder that will be replaced at run-time by a local file path pointing to a file containing the input argument value.

| Property  | Type     | Required | Description       |
| --------- | -------- | -------- | ----------------- |
| inputPath | `string` | Yes      | Name of the input |

### OutputPathPlaceholder

Represents the command-line argument placeholder that will be replaced at run-time by a local file path pointing to a file where the program should write its output data.

| Property   | Type     | Required | Description        |
| ---------- | -------- | -------- | ------------------ |
| outputPath | `string` | Yes      | Name of the output |

### StringOrPlaceholder

Union type that can be one of several placeholder types or a string.

| Type Options                                      |
| ------------------------------------------------- |
| `string`                                          |
| [`InputValuePlaceholder`](#inputvalueplaceholder) |
| [`InputPathPlaceholder`](#inputpathplaceholder)   |
| [`OutputPathPlaceholder`](#outputpathplaceholder) |
| [`ConcatPlaceholder`](#concatplaceholder)         |
| [`IfPlaceholder`](#ifplaceholder)                 |

### ConcatPlaceholder

Represents the command-line argument placeholder that will be replaced at run-time by the concatenated values of its items.

| Property | Type                                                     | Required | Description          |
| -------- | -------------------------------------------------------- | -------- | -------------------- |
| concat   | `array` of [`StringOrPlaceholder`](#stringorplaceholder) | Yes      | Items to concatenate |

### IsPresentPlaceholder

Represents the command-line argument placeholder that will be replaced at run-time by a boolean value specifying whether the caller has passed an argument for the specified optional input.

| Property  | Type     | Required | Description       |
| --------- | -------- | -------- | ----------------- |
| isPresent | `string` | No       | Name of the input |

### IfConditionArgumentType

Union type for conditional arguments.

| Type Options                                      |
| ------------------------------------------------- |
| [`IsPresentPlaceholder`](#ispresentplaceholder)   |
| `boolean`                                         |
| `string`                                          |
| [`InputValuePlaceholder`](#inputvalueplaceholder) |

### ListOfStringsOrPlaceholders

Array type definition.

| Type                                                     | Description                                     |
| -------------------------------------------------------- | ----------------------------------------------- |
| `array` of [`StringOrPlaceholder`](#stringorplaceholder) | Array containing strings or placeholder objects |

### IfPlaceholder

Represents the command-line argument placeholder that will be replaced at run-time by a boolean value specifying whether the caller has passed an argument for the specified optional input.

| Property | Type                                                          | Required | Description                           |
| -------- | ------------------------------------------------------------- | -------- | ------------------------------------- |
| if       | `object`                                                      | Yes      | Conditional structure                 |
| if.cond  | [`IfConditionArgumentType`](#ifconditionargumenttype)         | Yes      | Condition to evaluate                 |
| if.then  | [`ListOfStringsOrPlaceholders`](#listofstringsorplaceholders) | Yes      | Values to use when condition is true  |
| if.else  | [`ListOfStringsOrPlaceholders`](#listofstringsorplaceholders) | No       | Values to use when condition is false |

### ContainerSpec

Defines container execution specification.

| Property | Type                                                               | Required | Description                                                                                                  |
| -------- | ------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------ |
| image    | [`StringOrPlaceholder`](#stringorplaceholder)                      | Yes      | Docker image name                                                                                            |
| command  | `array` of [`StringOrPlaceholder`](#stringorplaceholder)           | No       | Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided |
| args     | `array` of [`StringOrPlaceholder`](#stringorplaceholder)           | No       | Arguments to the entrypoint. The docker image's CMD is used if this is not provided                          |
| env      | `object` with [`StringOrPlaceholder`](#stringorplaceholder) values | No       | List of environment variables to set in the container                                                        |

### ContainerImplementation

Represents the container component implementation.

| Property  | Type                              | Required | Description             |
| --------- | --------------------------------- | -------- | ----------------------- |
| container | [`ContainerSpec`](#containerspec) | Yes      | Container specification |

### ImplementationType

Union type for component implementations.

| Type Options                                          |
| ----------------------------------------------------- |
| [`ContainerImplementation`](#containerimplementation) |
| [`GraphImplementation`](#graphimplementation)         |

### MetadataSpec

Metadata specification for components.

| Property    | Type     | Required | Description                     |
| ----------- | -------- | -------- | ------------------------------- |
| annotations | `object` | No       | Additional metadata annotations |

### ComponentSpec

Component specification. Describes the metadata (name, description, source), the interface (inputs and outputs) and the implementation of the component.

| Property       | Type                                        | Required | Description                     |
| -------------- | ------------------------------------------- | -------- | ------------------------------- |
| name           | `string`                                    | No       | Component name                  |
| description    | `string`                                    | No       | Component description           |
| inputs         | `array` of [`InputSpec`](#inputspec)        | No       | Component input specifications  |
| outputs        | `array` of [`OutputSpec`](#outputspec)      | No       | Component output specifications |
| implementation | [`ImplementationType`](#implementationtype) | Yes      | Component implementation        |
| metadata       | [`MetadataSpec`](#metadataspec)             | No       | Component metadata              |

### ComponentReference

Component reference. Contains information that can be used to locate and load a component by name, digest or URL.

| Property | Type                              | Required | Description                    |
| -------- | --------------------------------- | -------- | ------------------------------ |
| name     | `string`                          | No       | Component name                 |
| digest   | `string`                          | No       | Component digest               |
| tag      | `string`                          | No       | Component tag                  |
| url      | `string`                          | No       | Component URL                  |
| spec     | [`ComponentSpec`](#componentspec) | No       | Inline component specification |

### GraphInputArgument

Represents the component argument value that comes from the graph component input.

| Property             | Type                            | Required | Description                                |
| -------------------- | ------------------------------- | -------- | ------------------------------------------ |
| graphInput           | `object`                        | Yes      | References the input of the graph/pipeline |
| graphInput.inputName | `string`                        | Yes      | Name of the graph input                    |
| graphInput.type      | [`TypeSpecType`](#typespectype) | No       | Type specification                         |

### TaskOutputArgument

Represents the component argument value that comes from the output of a sibling task.

| Property              | Type                            | Required | Description                             |
| --------------------- | ------------------------------- | -------- | --------------------------------------- |
| taskOutput            | `object`                        | Yes      | References the output of a sibling task |
| taskOutput.taskId     | `string`                        | Yes      | ID of the task                          |
| taskOutput.outputName | `string`                        | Yes      | Name of the output                      |
| taskOutput.type       | [`TypeSpecType`](#typespectype) | No       | Type specification                      |

### ArgumentType

Union type for task arguments.

| Type Options                                |
| ------------------------------------------- |
| `string`                                    |
| [`GraphInputArgument`](#graphinputargument) |
| [`TaskOutputArgument`](#taskoutputargument) |

### TwoArgumentOperands

Pair of operands for a binary operation.

| Property | Type                            | Required | Description    |
| -------- | ------------------------------- | -------- | -------------- |
| op1      | [`ArgumentType`](#argumenttype) | Yes      | First operand  |
| op2      | [`ArgumentType`](#argumenttype) | Yes      | Second operand |

### TwoLogicalOperands

Pair of operands for a binary logical operation.

| Property | Type                              | Required | Description            |
| -------- | --------------------------------- | -------- | ---------------------- |
| op1      | [`PredicateType`](#predicatetype) | Yes      | First logical operand  |
| op2      | [`PredicateType`](#predicatetype) | Yes      | Second logical operand |

### PredicateType

Union type for predicate expressions.

| Operator | Operand Type                                  | Description                      |
| -------- | --------------------------------------------- | -------------------------------- |
| ==       | [`TwoArgumentOperands`](#twoargumentoperands) | Equality comparison              |
| !=       | [`TwoArgumentOperands`](#twoargumentoperands) | Inequality comparison            |
| &gt;     | [`TwoArgumentOperands`](#twoargumentoperands) | Greater than comparison          |
| &gt;=    | [`TwoArgumentOperands`](#twoargumentoperands) | Greater than or equal comparison |
| &lt;     | [`TwoArgumentOperands`](#twoargumentoperands) | Less than comparison             |
| &lt;=    | [`TwoArgumentOperands`](#twoargumentoperands) | Less than or equal comparison    |
| and      | [`TwoLogicalOperands`](#twologicaloperands)   | Logical AND operation            |
| or       | [`TwoLogicalOperands`](#twologicaloperands)   | Logical OR operation             |
| not      | [`PredicateType`](#predicatetype)             | Logical NOT operation            |

### RetryStrategySpec

Optional configuration that specifies how the task should be retried if it fails.

| Property   | Type      | Required | Description                      |
| ---------- | --------- | -------- | -------------------------------- |
| maxRetries | `integer` | No       | Maximum number of retry attempts |

### CachingStrategySpec

Optional configuration that specifies how the task execution may be skipped if the output data exist in cache.

| Property          | Type                       | Required | Description                                  |
| ----------------- | -------------------------- | -------- | -------------------------------------------- |
| maxCacheStaleness | `string` (duration format) | No       | Maximum age of cached data to consider valid |

### ExecutionOptionsSpec

Optional configuration that specifies how the task should be executed. Can be used to set some platform-specific options.

| Property        | Type                                          | Required | Description           |
| --------------- | --------------------------------------------- | -------- | --------------------- |
| retryStrategy   | [`RetryStrategySpec`](#retrystrategyspec)     | No       | Retry configuration   |
| cachingStrategy | [`CachingStrategySpec`](#cachingstrategyspec) | No       | Caching configuration |

### TaskSpec

Task specification. Task is a configured component - a component supplied with arguments and other applied configuration changes.

| Property         | Type                                                 | Required | Description                        |
| ---------------- | ---------------------------------------------------- | -------- | ---------------------------------- |
| componentRef     | [`ComponentReference`](#componentreference)          | Yes      | Reference to the component         |
| arguments        | `object` with [`ArgumentType`](#argumenttype) values | No       | Arguments to pass to the component |
| isEnabled        | [`PredicateType`](#predicatetype)                    | No       | Condition for enabling the task    |
| executionOptions | [`ExecutionOptionsSpec`](#executionoptionsspec)      | No       | Execution configuration            |
| annotations      | `object`                                             | No       | Additional metadata annotations    |

### GraphSpec

Describes the graph component implementation. It represents a graph of component tasks connected to the upstream sources of data using the argument specifications. It also describes the sources of graph output values.

| Property     | Type                                                             | Required | Description           |
| ------------ | ---------------------------------------------------------------- | -------- | --------------------- |
| tasks        | `object` with [`TaskSpec`](#taskspec) values                     | Yes      | Tasks in the graph    |
| outputValues | `object` with [`TaskOutputArgument`](#taskoutputargument) values | No       | Output value mappings |

### GraphImplementation

Represents the graph component implementation.

| Property | Type                      | Required | Description         |
| -------- | ------------------------- | -------- | ------------------- |
| graph    | [`GraphSpec`](#graphspec) | Yes      | Graph specification |

### PipelineRunSpec

The object that can be sent to the backend to start a new Run.

| Property   | Type                    | Required | Description             |
| ---------- | ----------------------- | -------- | ----------------------- |
| rootTask   | [`TaskSpec`](#taskspec) | Yes      | Main task to execute    |
| onExitTask | [`TaskSpec`](#taskspec) | No       | Task to execute on exit |
