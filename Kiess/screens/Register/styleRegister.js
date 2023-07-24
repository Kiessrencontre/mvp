// styles.js
import { StyleSheet, PixelRatio, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontScale = PixelRatio.getFontScale();

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#FFF"
  },

  textTitle: {
    width: 274,
    // textAlign:"left",
    fontFamily: 'Roboto',
    marginTop: 36,
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 300,
    // lineHeight: "normal",
    // letterSpacing: 1.48,
    
  },
  textTitleG: {
    width: 314,
    // textAlign:"left",
    fontFamily: 'Roboto',
    marginTop: 36,
    fontSize: 29,
    fontStyle: "normal",
    fontWeight: 300,
    // lineHeight: "normal",
    // letterSpacing: 1.48,
    
  },

  logoKiess: {
    marginTop: height * 0.069,

  },
  button: {

    flexDirection: 'row',
    width: 343,
    height: 42,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    width: 229,
  },
  redText: {
    color: 'red',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 300,
    // lineHeight: "normal",

  },
  textBravo: {
    width:324,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 300,
    // lineHeight: "normal",

  },

  input: {
    width:294,
    fontSize: 16,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    marginBottom: 10,
  },

  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  validationText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginBottom:30,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
