import React from 'react';
import {View, StatusBar} from 'react-native';

import Container from '../components/Container';
import Logo from '../components/Logo';
import InputWithButton from '../components/TextInput';

const TEMP_DEFAULT = '100';
const TEMP_QUOTE = '79.8';

export default () => {
  const pressed = () => {
    console.log('btn pressed');
  };

  const handleTextChange = (text) => {
    console.log(text);
  }

  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Logo />
      <InputWithButton
        label="USD"
        onPress={pressed}
        defaultValue={TEMP_DEFAULT}
        keyboardType="numeric"
        onChangeText={handleTextChange}
      />
      <InputWithButton
        label="GBP"
        editable={false}
        onPress={pressed}
        value={TEMP_QUOTE}
      />
    </Container>
  );
};
