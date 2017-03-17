import { StyleSheet } from 'react-native'
import {
  Metrics,
  Fonts,
  Colors
} from './Themes'
export default StyleSheet.create({
  container: {
    padding: Metrics.baseMargin,
    flex: 1
  },
  text: {
    fontFamily: Fonts.type.mtg,
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  cardPowerToughness: {
    fontFamily: Fonts.type.mtg,
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  cardNameText: {
    fontFamily: Fonts.type.beleren,
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  cardTypeText: {
    fontFamily: Fonts.type.mtg,
    fontSize: Fonts.size.medium,
    color: Colors.black
  },
  mana: {
    fontFamily: Fonts.type.mtg,
    color: Colors.black,
    fontSize: Fonts.size.small
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftWord: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightWord: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cardTextContainer: {
    flexDirection: 'row'
  },
  cardText: {
    flex: 1,
    paddingTop: 6,
    flexDirection: 'row'
  },
  cardPower: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end'
  }
})
