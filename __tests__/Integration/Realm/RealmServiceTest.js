import { importMTGJSON, deleteAll, changeRealm } from '../../../src/Realm/RealmService'
import { schemas } from '../../../src/Config/Realm'
import AER from '../../../src/Assets/Cards/AER-X.json'

describe.skip('Realm Service', () => {
  beforeAll(() => {
    changeRealm({ schema: schemas, path: 'database/INTEGRATION_TEST.realm' })
    deleteAll()
    importMTGJSON(AER)
  })

  afterAll(() => {
    deleteAll()
  })

  it('Should be tested', () => {
    expect(true).toBeTruthy()
  })
  // function changeRealm (realmConfig) {
  // function write (callback) {
  // function findAll (collection: string) {
  // function findBy (collection: string, query: string) {
  // function create (type: objectType, properties: any, update: boolean = true) {
  // function objectForPrimaryKey (type: objectType, key: number | string) {
  // function valuesOf (realmClass: string) {
  // function deleteAll () {
  // function deleteCollectionByKey (collection, primaryKey) {
  // function remove (realmObject) {
})
