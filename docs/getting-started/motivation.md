# Motivation

## Why should a company use Tangle?

* Tracking and Reproducibility
  * Pipeline runs are recorded. Graph, logs, artifact metadata (size) and small values like metrics.
  * Intermediate data is immutable, never overwritten. This de-risks experimentation & sharing.
  * Each pipeline run can be cloned and re-submitted, producing same results, same models.
  * All components are strictly versioned.
* Time and compute savings due to execution caching
  * Pipeline tasks that were previously executed are reused, saving time and compute.
* Sharing
  * Team members can easily share pipeline runs. A user can easily investigate teammate's pipeline issue. A user can clone teammate’s pipeline, modify it and submit.
* Component library
  * Team can create a library of reusable components that can be used by all team members.
* Ease of onboarding. Can be used by non-engineers.
  * Users can create and run pipeline without writing code. No need to setup dev environment.
  * PMs can examine pipeline runs, track metrics and even run their own experiments.

## Why should a single ML engineer use Tangle?

* Tracking and Reproducibility
  * Even if you are on your own, automatic tracking and version control is useful.
* Data passing, execution caching
  * No need to tinker with manual data caching between data transformations.
* Non-intrusive
  * Components wrap what you already have. Any CLI program, any language, any container.
* Components as re-usable bits of knowledge
  * Like Lego pieces, components are self-contained and easy to reuse. Each component is like a simple to use function, not a complex framework/library full of classes.
  * Can share components between multiple pipelines. Components are independent. No dependency hell. Can use different versions together if needed (e.g. to compare results).
  * Connect different languages and frameworks together. Python, Java, Shell, Ruby, C++, JS/TS
  * Forgot how to write a Tensorflow training loop? Just look at a 50-line “Train Tensorflow model” component, not a 1000-line end-to-end tutorial. Or just use that component as-is.

## Comparison: Tangle vs other systems

|Feature          |Tangle         |Kubeflow Pipelines|Vertex Pipelines |Airflow      |
|-----------------|---------------|------------------|-----------------|-------------|
|Code & license   |Open-source    |Open-source       |Proprietary      |Open-source  |
|Cloud support    |Any cloud/local|Any Kubernetes    |Google Cloud only|Local, hosted|
|Data passing     |Good           |Good              |Yes. But Artifacts vs Properties friction.|Rudimentary|
|Execution caching|Content based,<br/>Global,<br/>succeeded/running|Lineage-based,<br/>Global,<br/>succeeded only|Lineage-based, per-pipeline,<br/>succeeded only|No|
|No-code visual pipeline editor UI|Yes|No            |No               |No|

## Tangle vs. Kubeflow Pipelines/Vertex Pipelines

* Same idea.
* Uses same `ComponentSpec`/`component.yaml` format introduced in KFP v1.
    This means that the components can be reused. The format has been stable since inception in 2018.
    (Warning: KFP v2 went through many cross-incompatible component formats.)
* Tangle has better execution caching: content-based, global, can reuse running execution. (vs. lineage-based, per-pipeline, succeeded executions only)
* Tangle can support different execution systems (different clouds).
  Kubeflow Pipelines can support any Kubernetes.
  Vertex Pipelines only supports Google Cloud Vertex AI.

## Comparison: Tangle vs Airflow

|Feature|Tangle|Airflow|
|---|---|---|
|Component specification|Declarative. Can describe arbitrary CLI program.|Python operator class.<br>Airflow-specific.|
|Component code runs|Inside a container.  <br>Usually: remote, distributed.|Local Python.  <br>Local (but can call remote services)|
|Data passing|Defined Inputs/Outputs.  <br>Explicit data connections.  <br>Arbitrary files/directories. Big data.<br>System-managed data storage and passing.|No defined Inputs/Outputs.  <br>No task data connections.  <br>XComs. Small bag of JSON data.  <br>No managed data storage.|
|Execution caching|Content based.  <br>Global.  <br>Succeeded/running.|No|
