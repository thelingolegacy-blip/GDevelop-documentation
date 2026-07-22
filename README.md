# GDevelop Documentation repository

![GDevelop logo](https://raw.githubusercontent.com/4ian/GDevelop/master/newIDE/GDevelop%20banner.png)

This repository holds [the official documentation](https://wiki.gdevelop.io) for the [GDevelop](https://gdevelop.io) editor.

## Getting Started

| ❔ I want to...                                   | 🚀 What to do                                                                          |
| ------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Improve or add articles to the documentation      | Head over to [this README](./SYNTAX.md) to understand the syntax of the documentation. |
| Bring improvements to the documentation interface | Head over to [this README](./CONTRIBUTE.md) to understand how this repository works.   |

## Contribute to this repository

Install [uv](https://github.com/astral-sh/uv) for Python. Then:

```bash
uv sync
uv run mkdocs serve # To run the documentation locally and see changes.
uv run mkdocs build # To build for deployment on a static hosting.
```

## Vercel deployment hardening

This fork includes Vercel security headers in `vercel.json` while preserving the MkDocs build command and `site` output directory.
