import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

const InputWithButton = props => {
  const {label, onPress, editable = true} = props;
  const container = [styles.container];
  editable ? container : container.push(styles.containerDisabled);

  return (
    <View style={container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
      <View style={styles.view} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  Text: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};

export default InputWithButton;
