import React from 'react';
import {View, StatusBar, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';

import Container from '../components/Container';
import Logo from '../components/Logo';
import InputWithButton from '../components/TextInput';
import SwitchButton from '../components/Button';
import LastConverted from '../components/Text';
import Header from '../components/Header';
import {swapCurrency, changeCurrencyAmount} from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_DEFAULT = '100';
const TEMP_QUOTE = '79.8';
const TEMP_CONVERSION_RATE = 0.79;
const TEMP_CONVERSION_DATE = new Date();

const Home = ({navigation, changeAmount, swapCurrency}) => {
  const pressedBase = () => {
    navigation.push('CurrencyList', {title: 'Base Currency'});
  };

  const pressedQuote = () => {
    navigation.push('CurrencyList', {title: 'Quote Currency'});
  };

  const handleAmountChange = amount => {
    changeAmount(amount);
  };

  const handleOptionPress = () => {
    navigation.navigate('Options');
  };

  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header onPress={handleOptionPress} behavior="position" />
      <KeyboardAvoidingView>
        <Logo />
        <InputWithButton
          label={TEMP_BASE_CURRENCY}
          onPress={pressedBase}
          defaultValue={TEMP_DEFAULT}
          keyboardType="numeric"
          onChangeText={handleAmountChange}
        />
        <InputWithButton
          label={TEMP_QUOTE_CURRENCY}
          editable={false}
          onPress={pressedQuote}
          value={TEMP_QUOTE}
        />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <SwitchButton text="Swap Currency" onPress={swapCurrency} />
      </KeyboardAvoidingView>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  swapCurrency: () => dispatch(swapCurrency()),
  changeAmount: amount => dispatch(changeCurrencyAmount(amount)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Home);
