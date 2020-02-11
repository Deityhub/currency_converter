import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({text, selected = false, onPress, customIcon}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected && <Icon />}
        {customIcon && customIcon}
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  customIcon: PropTypes.element,
};

export default ListItem;
