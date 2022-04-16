# 🍭 Swear JS
## @swear-js/logger
___
[![npm](https://img.shields.io/npm/v/@swear-js/logger?style=flat-square)](https://www.npmjs.com/package/@swear-js/logger)
![npm type definitions](https://img.shields.io/npm/types/@swear-js/logger?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@swear-js/logger?style=flat-square)](https://bundlephobia.com/result?p=@swear-js/logger)
![GitHub](https://img.shields.io/github/license/soundsnick/swear-js?style=flat-square)

Logger package for [SwearJS](https://github.com/soundsnick/swear-js) state manager

## Installation
```
$ npm install @swear-js/logger
```

or in case you are using Yarn:
```
$ yarn add @swear-js/logger
```

## Usage
___
You can pass your custom logger to the store, or use @swear-js/logger.
Swear-js logger usage:

```typescript
import { createStore } from "@swear-js/core";
import { swearLogger } from "@swear-js/logger";

const store = createStore({ onPatch: swearLogger });
```
