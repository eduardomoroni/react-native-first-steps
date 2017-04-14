import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer, reduxForm } from 'redux-form'

// This function mocks a provider and ReduxForm decoration, enabling
// to test a reduxForm component with enzyme render function
export function decorateReduxForm (formComponent, props) {
  const store = createStore(reducer)
  const Decorated = reduxForm({ form: 'testingForm' })(formComponent)

  return (
    <Provider store={store}>
      <Decorated {...props} />
    </Provider>
  )
}

// Example of Usage
// it('Should fully render MyComponent', () => {
//   const DecoratedForm = decorateReduxForm(MyComponent, props)
//   expect(render(DecoratedForm)).toMatchSnapshot()
// })
