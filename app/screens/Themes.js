import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import PropTypes from 'prop-types';

import {ListItem, Separator} from '../components/List';

const BLUE = '#4F6D7A';
const ORANGE = '#D57A66';
const GREEN = '#00BD9D';
const PURPLE = '#9E768F';

const Themes = ({navigation}) => {
  const handleThemePress = color => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" translucent={false} />
      <ListItem
        text="Blue"
        onPress={() => handleThemePress(BLUE)}
        checked={false}
        selected
        backgroundColor={BLUE}
      />
      <Separator />
      <ListItem
        text="Orange"
        onPress={() => handleThemePress(ORANGE)}
        checked={false}
        selected
        backgroundColor={ORANGE}
      />
      <Separator />
      <ListItem
        text="Green"
        onPress={() => handleThemePress(GREEN)}
        checked={false}
        selected
        backgroundColor={GREEN}
      />
      <Separator />
      <ListItem
        text="Purple"
        onPress={() => handleThemePress(PURPLE)}
        checked={false}
        selected
        backgroundColor={PURPLE}
      />
      <Separator />
    </ScrollView>
  );
};

Themes.propTypes = {
  navigation: PropTypes.object,
};

export default Themes;
