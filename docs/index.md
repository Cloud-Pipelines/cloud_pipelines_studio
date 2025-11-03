---
hide:
  - navigation
  - toc
---
# Tangle

Tangle is a service and a Web app that allows the users to build and run Machine Learning pipelines using drag and drop without having to set up development environment.

[![image](https://github.com/user-attachments/assets/0ce7ccc0-dad7-4f6a-8677-f2adcd83f558)](https://cloud-pipelines.net/pipeline-studio-app)

<!--
## Video

Please take a look at the short video demonstrating the first version of the visual pipeline editor.

[Cloud Pipelines Editor - Build machine learning pipelines without writing code](https://www.youtube.com/watch?v=7g22nupCDes)
-->

## Demo

[Demo](https://cloud-pipelines.net/pipeline-studio-app)

The experimental new version of the Tangle app is now available at <https://cloud-pipelines.net/pipeline-studio-app> . No registration is required to experiment with building pipelines. To be able to execute the pipelines, follow the [installation instructions](#installation).

Please check it out and report any bugs you find using [GitHub Issues](https://github.com/Cloud-Pipelines/tangle/issues).

The app is under active development, so expect some breakages as we work on the app and do not rely on the app for production.

## Installation

### Try on local machine

1. Install [Docker](https://www.docker.com/get-started/) and [uv](https://docs.astral.sh/uv/getting-started/installation/).
2. Download the app code (needs to be done once):

```shell
git clone https://github.com/Cloud-Pipelines/backend.git tangle/backend --branch stable
git clone https://github.com/Cloud-Pipelines/pipeline-studio-app.git tangle/frontend_build --branch gh_pages_stable --single-branch --depth 1
```
3. Start the app:

Linux and Mac OS:

```shell
cd tangle && backend/start_local.sh
```

Windows:

```bat
cd tangle && backend\start_local.cmd
```
4. Once the "start_local: Starting the orchestrator" message appears in the terminal, open the [http://localhost:8000](http://localhost:8000) URL in a Web browser and start use the app.
Click the "New Pipeline" button at the top to start building a new pipeline.

### Try in Google Cloud Shell (free)

[Google Cloud Shell](https://cloud.google.com/shell/) is free (50 hours per week) and needs a Google Cloud account.

1. Open [Google Cloud Shell](https://shell.cloud.google.com/?show=terminal) in a Web browser
2. Download the app code (needs to be done once):

```shell
git clone https://github.com/Cloud-Pipelines/backend.git tangle/backend --branch stable
git clone https://github.com/Cloud-Pipelines/pipeline-studio-app.git tangle/frontend_build --branch gh_pages_stable --single-branch --depth 1
```

3. Start the app:

```shell
cd tangle && backend/start_local.sh
```

4. Once the "start_local: Starting the orchestrator", "View app at" messages appears in the terminal, open the <https://shell.cloud.google.com/devshell/proxy?port=8000> URL in another browser tab and start using the app.

## App features

*   Start building pipelines right away
    * Intuitive visual drag and drop interface
    * No registration required to build. You own your data.
*   Execute pipelines on your local machine or in Cloud
    * Easily install the app on local machine or deploy to cloud
    * Submit pipelines for execution with a single click.
    * Easily monitor all pipeline task executions, view the artifacts, read the logs.
*   Fast iteration
    * Clone any pipeline run and get a new editable pipeline
    * Create pipeline -> Submit run -> Monitor run -> Clone run -> Edit pipeline -> Submit run ...
*   Automatic execution caching and reuse
    * Save time and compute. Don't re-do what's done
    * Successful and even running executions are re-used from cache
*   Reproducibility
    * All your runs are kept forever (on your machine) - graph, logs, metadata
    * Re-run an old pipeline run with just two clicks (Clone pipeline, Submit run)
    * Containers and strict component versioning ensure reproducibility
*   Pipeline Components
    * Time-proven `ComponentSpec`/`component.yaml` format
    * A library of preloaded components
    * Fast-growing public component ecosystem
    * Add your own components (public or private)
    * Easy to create your own components manually or using the Cloud Pipelines SDK
    * Components can be written in [any language](https://github.com/Ark-kun/pipeline_components/tree/master/components/sample) (Python, Shell, R, Java, C#, etc).
    * Compatible with [Google Cloud Vertex AI Pipelines](https://cloud.google.com/vertex-ai/docs/pipelines/introduction) and [Kubeflow Pipelines](https://www.kubeflow.org/docs/components/pipelines/introduction/)
    * Lots of pre-built components on GitHub: [Ark-kun/pipeline_components](https://github.com/Ark-kun/pipeline_components/tree/master/components).

We have many exciting features planned, but we want to prioritize the features based on the user feedback.

## Credits

The Tangle app is based on the [Pipeline Editor](https://cloud-pipelines.net/pipeline-editor) app created by [Alexey Volkov](https://github.com/Ark-kun) as part of the [Cloud Pipelines](https://github.com/Cloud-Pipelines) project.
