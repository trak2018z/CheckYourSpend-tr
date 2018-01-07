#!/usr/bin/env bash

TAG=${1}

export IMAGE_VERSION=${TAG}

envsubst < "deployment.yml" > "deployment_target.yml"

kubectl apply -f deployment_target.yml