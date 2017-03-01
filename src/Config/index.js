import '../I18n/I18n'
import initFirebase from './Firebase'
export * from './CreateStore'

export default () => {
  initFirebase()
}
