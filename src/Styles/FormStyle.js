import { Metrics, Colors, Fonts } from '../Styles/Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.marginHorizontal,
    marginBottom: Metrics.smallMargin,
    height: Metrics.inputHeight,
    borderColor: Colors.windowTint,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  dropdown: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  text: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: Metrics.smallMargin
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
  }
})
