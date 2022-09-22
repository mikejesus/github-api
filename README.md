# github-api

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

This a rest api for consuming github rest api using octokit.

The goal of the api is to get the repo info of an organization/owner.

You can get all the repos of an organization or get a detail of a particular repo

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

To get this app to run on your machine, you would need the following:
i. Installation of node
ii. Redis server

### Installing

After cloning or downloading the project files,

```
Run npm install to install the packages
```

```
Run your redis server
```
To use redis from docker:
Use the followin command below
docker run -d --name <CONTAINER_NAME> -p 127.0.0.1:6379:6379 redis


End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.
