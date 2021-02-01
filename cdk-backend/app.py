#!/usr/bin/env python3

from aws_cdk import core

from cdk_backend.cdk_backend_stack import CdkBackendStack


app = core.App()
CdkBackendStack(app, "cdk-backend")

app.synth()

# https://github.com/dabit3/amplify-with-cdk/blob/main/cdk-backend/lib/cdk-backend-stack.ts
