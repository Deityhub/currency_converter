import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#343434',
  },
  separator: {
    backgroundColor: '#e2e2e2',
    flex: 1,
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 15,
  },
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f6d7a',
  },
  icon: {
    width: 18,
    resizeMode: 'contain',
  },
});
