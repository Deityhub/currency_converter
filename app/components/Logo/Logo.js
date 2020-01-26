import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode="contain"
      source={require('./images/background.png')}
      style={styles.bgImg}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('./images/logo.png')}
      />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
