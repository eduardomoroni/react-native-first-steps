import test from 'ava'
import reducers from '../../../src/Redux/Reducers'

test('Should keep root state immutable in case of invalid actions', t => {
  const INITIAL_STATE = reducers({}, {})
  const state = reducers(INITIAL_STATE, { type: 'invalid_action' })

  t.is(INITIAL_STATE, state)
  t.deepEqual(INITIAL_STATE, state)
})
