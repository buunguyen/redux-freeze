## redux-freeze

[![NPM](https://nodei.co/npm/redux-freeze.png?compact=true)](https://www.npmjs.com/package/redux-freeze)

[![Build Status](https://travis-ci.org/buunguyen/redux-freeze.svg?branch=master)](https://travis-ci.org/buunguyen/redux-freeze)

Redux middleware that freezes state from being mutated anywhere in the app. When mutation occurs, an error will be thrown by the runtime. This is useful during development mode to ensure that no part of the app accidentally mutates the state.

### Usage

```js
// Only includes in DEV mode
if (__DEV__) {
  const freeze = require('redux-freeze')
  reduxMiddleware.push(freeze)
}
```

### Test

```bash
npm install
npm test
```
