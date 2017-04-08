import { Metrics, Colors, Fonts } from '../Styles/Themes'
import { StyleSheet } from 'react-native'

const fontPattern = {
  fontFamily: Fonts.type.mtg,
  fontSize: Fonts.size.medium,
  color: 'black'
}

export default StyleSheet.create({
  container: {
    marginBottom: Metrics.smallMargin,
    height: Metrics.inputHeight,
    borderColor: Colors.windowTint,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalToggle: {
    marginBottom: Metrics.smallMargin,
    height: Metrics.inputHeight,
    borderColor: Colors.windowTint,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    justifyContent: 'flex-end',
    ...fontPattern,
    color: 'grey'
  },
  dropdown: {
    flex: 1,
    justifyContent: 'flex-end',
    color: 'grey'
  },
  text: {
    flex: -1,
    justifyContent: 'flex-start',
    marginLeft: Metrics.smallMargin,
    ...fontPattern
  },
  buttonContainer: {
    backgroundColor: Colors.facebook,
    height: Metrics.inputHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: Fonts.type.beleren,
    fontSize: Fonts.size.input,
    color: Colors.white
  },
  manaIcon: {
    width: 30,
    height: 30,
    marginHorizontal: Metrics.smallMargin
  }
})
