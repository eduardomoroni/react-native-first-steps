export const WishListSchema = {
  name: 'WishList',
  primaryKey: 'id',
  properties: {
    id: 'string',
    lastUpdate: 'date',
    lastSync: 'date',
    want: {type: 'list', objectType: 'CardAmount'},
    have: {type: 'list', objectType: 'CardAmount'}
  }
}
