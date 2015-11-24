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
})
