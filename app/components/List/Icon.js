import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

const Icon = () => (
  <View style={styles.iconWrapper}>
    <Image style={styles.icon} source={require('./images/check.png')} />
  </View>
);

export default Icon;
