# Component specification

ComponentSpec in JsonSchema format:
[component_spec.json_schema.json](https://github.com/Cloud-Pipelines/component_spec_schema/blob/master/component_spec.json_schema.json)

## ComponentSpec Outline

```yaml
<ComponentSpec>:
    name: string
    description: string
    metadata:
        annotations: Map[string, any]
    inputs: #InputSpec[]
        <InputSpec[]>:
            name: string
            type: TypeSpecType
            description: string
            default: string
            optional: boolean
            annotations: Map[string, any]
    outputs: #OutputSpec[]
        <OutputSpec[]>:
            name: string
            type: TypeSpecType
            description: string
            annotations: Map[string, any]
    implementation: #ImplementationType
        <oneOf>:
            <ContainerImplementation>:
                container: #ContainerSpec
                    image: StringOrPlaceholder
                    command: #StringOrPlaceholder[]
                        <oneOf>:
                            string:
                            <InputValuePlaceholder>:
                                inputValue: string
                            <InputPathPlaceholder>:
                                inputPath: string
                            <OutputPathPlaceholder>:
                                outputPath: string
                            <ConcatPlaceholder>:
                                concat: StringOrPlaceholder[]
                            <IfPlaceholder>:
                                if:
                                    cond: IfConditionArgumentType
                                    then: StringOrPlaceholder[]
                                    else: StringOrPlaceholder[]
                    args: StringOrPlaceholder[]
                    env: Map[str, StringOrPlaceholder]
            <GraphImplementation>:
                graph: #GraphSpec
                    tasks: #Map string -> TaskSpec
                        <TaskSpec>:
                            componentRef: #ComponentReference
                                name: string
                                digest: string
                                text: string
                                url: string
                                spec: ComponentSpec
                                tag: string  # unused
                            arguments: #Map string -> ArgumentType
                                <ArgumentType>:
                                    <oneOf>:
                                        string:
                                        <GraphInputArgument>:
                                            graphInput:
                                                inputName: string
                                                type: TypeSpecType
                                        <TaskOutputArgument>:
                                            taskOutput:
                                                taskId: string
                                                outputName: string
                                                type: TypeSpecType
                            isEnabled: ArgumentType
                            executionOptions: #ExecutionOptionsSpec
                                # retryStrategy: #RetryStrategySpec
                                #     maxRetries: integer  # Not implemented in Tangle yet
                                cachingStrategy: #CachingStrategySpec
                                    maxCacheStaleness: string
                            annotations: Map[string, any]
                    outputValues: Map string -> TaskOutputArgument
```
