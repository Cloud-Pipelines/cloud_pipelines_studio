#!/bin/sh -e -x

uvx --with-requirements https://raw.githubusercontent.com/astral-sh/uv/28685633c01a0e989abe997e0378e8073d1fdad1/docs/requirements.txt --python 3.11 -- mkdocs serve -f mkdocs.yaml --dev-addr 127.0.0.1:8000

# Alternative: https://squidfunk.github.io/mkdocs-material/creating-your-site/#previewing-as-you-write
# docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
