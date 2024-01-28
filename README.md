# Web UI

## Web Interface for OpenQC

## Overview

This microservice serves the OpenQC web frontend using the [Nuxt3](https://nuxt.com/) framework.

## Environment variables

Environment variables and their values are configured at the root directory in a `.env` file. Create it if it does not exist yet.

## Install dependencies

```bash
npm install
```

## Lint

```bash
npm lint
```

## Run in Dev Mode

```bash
npm run dev
```

## Docker

To run the frontend in a docker container

```bash
doceker build -t web-ui .
```

Once image is built use

```bash
docker run -p 3000:3000 web-ui
```
