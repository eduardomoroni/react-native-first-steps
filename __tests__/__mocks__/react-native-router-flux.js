jest.genMockFromModule('react-native-router-flux')

export const Actions = {
  pop: jest.fn(payload => payload),
  refresh: jest.fn(payload => payload)
}
