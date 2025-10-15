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

The experimental new version of the Tangle app is now available at <https://cloud-pipelines.net/pipeline-studio-app> . No registration is required to experiment with building pipelines. To install your own app instance, follow the [backend installation instructions](https://github.com/Cloud-Pipelines/backend?tab=readme-ov-file#installation).

Please check it out and report any bugs you find using [GitHub Issues](https://github.com/Cloud-Pipelines/tangle/issues).

The app is under active development, so expect some breakages as I work on the app and do not rely on the app for production.

## Installation

### Try on local machine

1. Install [Docker](https://www.docker.com/get-started/) and [uv](https://docs.astral.sh/uv/getting-started/installation/).
2. Download the app code (needs to be done once):

```shell
git clone https://github.com/Cloud-Pipelines/backend.git tangle/backend --branch stable
git clone https://github.com/Cloud-Pipelines/pipeline-studio-app.git tangle/frontend_build --branch gh_pages_stable --single-branch --depth 1
```

3. Start the app:

```shell
cd tangle/backend && uv run fastapi run start_local.py
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
cd tangle/backend && uv run fastapi run start_local.py
```

4. Once the "start_local: Starting the orchestrator" message appears in the terminal, open the  <https://shell.cloud.google.com/devshell/proxy?port=8000> URL in another browser tab.


### App features:

- Build pipeline using drag and drop
- Edit component arguments
- Submit the pipeline for execution. (Follow the [installation instructions](https://github.com/Cloud-Pipelines/backend?tab=readme-ov-file#installation).)
- The ComponentSpec/`component.yaml` format used by Cloud Pipelines is fully compatible with the Google Cloud Vertex AI Pipelines and Kubeflow Pipelines v1. You can find many components here: [Ark-kun/pipeline_components](https://github.com/Ark-kun/pipeline_components/)
- Preloaded component library
- User component library (add private components)
- Component search
- Import and export pipelines

There are many features that I want to add, but I want to prioritize them based on your feedback.

### Credits:

The Tangle app is based on the [Pipeline Editor](https://cloud-pipelines.net/pipeline-editor) app created by [Alexey Volkov](https://github.com/Ark-kun) as part of the [Cloud Pipelines](https://github.com/Cloud-Pipelines) project.
