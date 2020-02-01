import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Keyboard,
  Animated,
  Platform,
} from 'react-native';

import styles, {imageWidth} from './styles';

const Logo = () => {
  const largeContainerWidth = new Animated.Value(imageWidth);
  const largeImageWidth = new Animated.Value(imageWidth / 2);
  const ANIMATION_DURATION = 250;

  const keyboardShow = () => {
    Animated.parallel([
      Animated.timing(largeContainerWidth, {
        toValue: imageWidth / 2,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(largeImageWidth, {
        toValue: imageWidth / 4,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  const keyboardHide = () => {
    Animated.parallel([
      Animated.timing(largeContainerWidth, {
        toValue: imageWidth,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(largeImageWidth, {
        toValue: imageWidth / 2,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  useEffect(() => {
    let keyboardShowing = 'keyboardWillShow';
    let keyboardHiden = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      keyboardShowing = 'keyboardDidShow';
      keyboardHiden = 'keyboardDidHide';
    }

    let keyboardDidShowListener = Keyboard.addListener(
      keyboardShowing,
      keyboardShow,
    );

    let keyboardDidHideListener = Keyboard.addListener(
      keyboardHiden,
      keyboardHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imgWrapper,
          {width: largeContainerWidth, height: largeContainerWidth},
        ]}>
        <ImageBackground
          resizeMode="contain"
          source={require('./images/background.png')}
          style={styles.bgImg}>
          <Animated.Image
            resizeMode="contain"
            style={[styles.img, {width: largeImageWidth}]}
            source={require('./images/logo.png')}
          />
        </ImageBackground>
      </Animated.View>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};

export default Logo;
