## Wrappid core package [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wrappid/core/blob/main/LICENSE) ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fwrappid%2Fcore%2Freleases%2Flatest&query=tag_name&label=%40wrappid%2Fcore) [![Release - CI](https://github.com/wrappid/core/actions/workflows/create-release.yml/badge.svg?branch=development)](https://github.com/wrappid/core/actions/workflows/create-release.yml) 

This package is a part of wrappid framework for wrappid-app projects.   

This package is made to be used by [wrappid/wrappid-app](https://github.com/wrappid/wrappid-app) projects initialised by wrappid/toolkit.

## Usage

Here's a basic example with HelloWorld component to demonstrate how to use wrappid/core in a wrappid-app project:

```javascript
import { CoreH1 } from '@wrappid/core';

export default function HelloWorld() {
    return (
        <CoreH1> Hello World </CoreH1>
    );
}
```