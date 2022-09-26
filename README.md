# github-api

## About <a name = "about"></a>

This a rest api for consuming github rest api using octokit.

The goal of the api is to get the repo info of an organization/owner.

You can get all the repos of an organization or get a detail of a particular repo

## Running the app locally <a href="getting_started"></a>

### Prerequisites

To get this app to run on your machine, you would need the following:
i. Installation of node
ii. Redis server or you use a cloud server or docker.

I used a redis cloud server for this task.

### Installing

After cloning or downloading the project files,

To install the packages, run the command below

```
 npm install
```

```
Run your redis server
```

## Endpoints

api/v1/github/repo/info/{organization}
api/v1/github/repo/info/{organization}/{repoName}
