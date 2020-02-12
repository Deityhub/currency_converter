import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Icon = ({checked, backgroundColor}) => (
  <View style={[styles.iconWrapper, backgroundColor && {backgroundColor}]}>
    {checked && (
      <Image style={styles.icon} source={require('./images/check.png')} />
    )}
  </View>
);

Icon.propTypes = {
  checked: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default Icon;
