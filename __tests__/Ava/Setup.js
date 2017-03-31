import mockery from 'mockery'

// inject __DEV__ as it is not available when running through the tests
global.__DEV__ = true

// We enable mockery and leave it on.
mockery.enable()

// Silence the warnings when *real* modules load... this is a change from
// the norm.  We want to opt-in instead of opt-out because not everything
// will be mocked.
mockery.warnOnUnregistered(false)

// Mock any libs that get called in here
mockery.registerMock('firebase', {})
mockery.registerMock('react-native-router-flux', {
  Actions: { 'listCards': () => {} },
  ActionConst: { RESET: 'reset' }
})