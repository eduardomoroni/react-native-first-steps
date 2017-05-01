import reducers from '../../../../src/Redux/Reducers'

it('Should keep root state immutable in case of invalid actions', () => {
  const INITIAL_STATE = reducers({}, {})
  const state = reducers(INITIAL_STATE, { type: 'invalid_action' })

  expect(INITIAL_STATE).toBe(state)
})
