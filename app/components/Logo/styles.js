import {StyleSheet, Dimensions} from 'react-native';

let imageWidth = Dimensions.get('window').width / 2;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgImg: {
    width: imageWidth,
    height: imageWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: imageWidth / 2
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28,
    marginTop: 15,
    letterSpacing: -0.5
  },
});
