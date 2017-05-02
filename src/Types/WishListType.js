import PropTypes from 'prop-types'
import { cardType } from './CardType'

const cardAmount = PropTypes.shape({
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  card: cardType.isRequired
})

export const wishListType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  lastUpdate: PropTypes.instanceOf(Date).isRequired,
  lastSync: PropTypes.instanceOf(Date).isRequired,
  want: PropTypes.objectOf(cardAmount),
  have: PropTypes.objectOf(cardAmount)
})
