// styles.js
import { StyleSheet , PixelRatio, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontScale = PixelRatio.getFontScale();

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: "#100c3c"
  },
  text: {
    marginTop: 36,
    color: "#FFF",
    fontSize: 14.8,
    fontStyle: "normal",
    fontWeight: 900,
    // lineHeight: "normal",
    letterSpacing: 1.48,
  },
  
  logoKiess: {
    // marginTop:190,
    marginTop: height * 0.23,
    width: 294,
    height: 149,
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
    width:229,
  },
  logo: {
    width: 17,
    height: 20,
    marginLeft: 56,
  },
  textContainer: {
    flex: 1,
  },
  text14:{
    marginTop: height * 0.02,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },
  text11:{
  // marginTop:119,
  marginTop:height * 0.12,
  // marginBottom : 47,
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: 11,
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 18,
},
});
