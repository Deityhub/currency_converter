import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';

import {ListItem, Separator} from '../components/List';

const ICON_SIZE = 23;
const ICON_COLOR = '#868686';

const Options = () => {
  const handleThemesPress = () => {
    console.log('Theme pressed');
  };

  const handleSitePress = () => {
    console.log('Site pressed');
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

export default Options;
