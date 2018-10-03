import {assert} from 'chai'
import sinon from 'sinon'
import freeze from '../src/middleware'

describe('redux-freeze', () => {
  const dispatch = () => {}

  it('should throw when mutation occurs during action dispatching', () => {
    const state = {}
    const getState = () => state
    const next = () => {
      const state = getState()
      state.prop = 0
    }

    assert.throws(() => {
      freeze({dispatch, getState})(next)()
    }, TypeError)
  })

  it('should throw when mutation occurs outside action dispatching', () => {
    const state = {}
    const getState = () => state
    const next = () => {}

    freeze({dispatch, getState})(next)()

    assert.throws(() => {
      const state = getState()
      state.prop = 0
    }, TypeError)
  })

  it('should not attempt to freeze non-object values', () => {
    const nonObjectValues = [
      undefined,
      null,
      0,
      ''
    ]

    nonObjectValues.forEach(state => {
      const getState = () => state
      assert.doesNotThrow(() => freeze({dispatch, getState}))
    })
  })

  it('should throw when mutation occurs on an object with null prototype', () => {
    const state = Object.create(null, {x: {}})
    const getState = () => state
    const next = () => {}

    freeze({dispatch, getState})(next)()

    assert.throws(() => {
      const state = getState()
      state.x.y = 0
    }, TypeError)
  })

  it('should freeze initial state', () => {
    const state = {}
    const getState = () => state

    freeze({dispatch, getState})
    assert.throws(() => {
      const state = getState()
      state.prop = 0
    }, TypeError)
  })
})
