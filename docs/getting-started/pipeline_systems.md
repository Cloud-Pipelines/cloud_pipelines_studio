# Pipeline systems

## What does a pipeline system do in a nutshell?

A pipeline system like Tangle (also Cloud Pipelines/Vertex Pipelines/Kubeflow Pipelines):

* **Orchestrates** (distributed execution, scheduling, data passing, caching)
* **Containerized** (isolated inside containers)
* **Command-line** (the true interface with user code is command line)
* **Programs** (e.g. not functions passing shared in-memory objects)

## What is a pipeline?

Pipeline is a graph of tasks connected to each other (task outputs connected to task inputs).
Tasks are instances of components.
Components have name, inputs/outputs and implementation (a program).

Pipeline can be submitted for execution as a pipeline run.

When tasks are executed, they read input data, process it, produce output data.

<!-- Tangle Pipelines has similarity to systems like Vertex Pipelines, Kubeflow Pipelines, Airflow, Argo. It also has similarities with build pipelines, makefiles. -->

## Example of a Machine Learning pipeline

1. Gather raw training data
1. Preprocess the data
1. Split data into train and test
1. Train model on training data
1. Apply training model to test data
1. Calculate metrics
1. Export the model to model archive
1. Deploy model to experimental environment
1. Use the experimental model to obtain results
1. Collect human-provided labels for the new results
1. Calculate human-based metrics
1. Conditionally deploy the model to production
