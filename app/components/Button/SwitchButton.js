import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const SwitchButton = ({text, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image style={styles.img} source={require('./images/icon.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

SwitchButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default SwitchButton;
