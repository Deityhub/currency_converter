import React from 'react';
import {ScrollView, StatusBar, Linking} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import {ListItem, Separator} from '../components/List';

const ICON_SIZE = 23;
const ICON_COLOR = '#868686';

const Options = ({navigation}) => {
  const handleThemesPress = () => {
    navigation.navigate('Themes');
  };

  const handleSitePress = () => {
    let url = 'https://fixer.io';
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          alert("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => alert('An error occurred', err));
  };
  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="light-content" />
      <ListItem
        text="Themes"
        onPress={handleThemesPress}
        customIcon={
          <Icon
            type="ionicon"
            name="md-arrow-forward"
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        }
      />
      <Separator />
      <ListItem
        text="Fixer.io"
        onPress={handleSitePress}
        customIcon={
          <Icon
            type="ionicon"
            name="md-link"
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        }
      />
    </ScrollView>
  );
};

Options.propTypes = {
  navigation: PropTypes.object,
};

export default Options;
