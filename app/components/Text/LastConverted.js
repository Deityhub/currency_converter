import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import formatDate from '../../utils/formatDate';

const LastConverted = ({base, quote, date, conversionRate}) => (
  <Text style={styles.text}>
    1 {base} = {conversionRate} {quote} as of {formatDate(date)}
  </Text>
);

LastConverted.propTypes = {
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
  date: PropTypes.object,
};

export default LastConverted;
