import React from 'react';
import {View, StatusBar} from 'react-native';

import Container from '../components/Container';
import Logo from '../components/Logo';
import InputWithButton from '../components/TextInput';
import SwitchButton from '../components/Button';
import LastConverted from '../components/Text';
import Header from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_DEFAULT = '100';
const TEMP_QUOTE = '79.8';
const TEMP_CONVERSION_RATE = 0.79;
const TEMP_CONVERSION_DATE = new Date();

export default () => {
  const pressed = () => {
    console.log('btn pressed');
  };

  const handleTextChange = text => {
    console.log(text);
  };

  const swapCurrency = () => {
    console.log('swapped currency');
  };

  const handleOptionPress = () => {
    console.log('option pressed');
  };

  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header onPress={handleOptionPress} />
      <Logo />
      <InputWithButton
        label={TEMP_BASE_CURRENCY}
        onPress={pressed}
        defaultValue={TEMP_DEFAULT}
        keyboardType="numeric"
        onChangeText={handleTextChange}
      />
      <InputWithButton
        label={TEMP_QUOTE_CURRENCY}
        editable={false}
        onPress={pressed}
        value={TEMP_QUOTE}
      />
      <LastConverted
        base={TEMP_BASE_CURRENCY}
        quote={TEMP_QUOTE_CURRENCY}
        date={TEMP_CONVERSION_DATE}
        conversionRate={TEMP_CONVERSION_RATE}
      />
      <SwitchButton text="Swap Currency" onPress={swapCurrency} />
    </Container>
  );
};
