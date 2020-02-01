import {StyleSheet, Dimensions} from 'react-native';

export let imageWidth = Dimensions.get('window').width / 2;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgWrapper: {
    width: imageWidth,
    height: imageWidth,
  },
  bgImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: imageWidth / 2,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 28,
    marginTop: 15,
    letterSpacing: -0.5,
  },
});
