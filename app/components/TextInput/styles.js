import {StyleSheet} from 'react-native';

const HEIGHT = 50;
const BORDER_RADIUS = 5;
const SPACE = 11

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    height: HEIGHT,
    backgroundColor: '#fff',
    borderRadius: BORDER_RADIUS,
    marginVertical: SPACE
  },
  containerDisabled: {
    backgroundColor: '#d5dbdc'
  },
  btn: {
    height: HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACE,
    backgroundColor: '#fff',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS
  },
  text: {
    color: '#4f6d7a',
    fontWeight: '600',
    fontSize: 20,
  },
  view: {
    height: HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#e2e2e2'
  },
  input: {
    height: HEIGHT,
    flex: 1,
    paddingVertical: SPACE,
    fontSize: 18,
    color: '#797979'
  },
});
