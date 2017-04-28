export const CardAmountSchema = {
  name: 'CardAmount',
  primaryKey: 'id',
  properties: {
    id: 'int',
    card: 'Card',
    amount: {type: 'int', default: 1}
  }
}
