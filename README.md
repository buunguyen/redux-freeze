## redux-freeze

[![NPM](https://nodei.co/npm/redux-freeze.png?compact=true)](https://www.npmjs.com/package/redux-freeze)

[![Build Status](https://travis-ci.org/buunguyen/redux-freeze.svg?branch=master)](https://travis-ci.org/buunguyen/redux-freeze)

Redux middleware that prevents state from being mutated anywhere in the app. When mutation occurs, an error will be thrown by the runtime. This is useful during development mode to ensure that no part of the app accidentally mutates the state.

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

### Changes

__0.1.5__
* Fix bug error is thrown when an object in the state has null prototype

__0.1.4__
* Fix bug error is thrown when the state is not freezable

__0.1.3__
* Fix bug result of the middleware is not returned
