import React from 'react';
import {FlatList, View, StatusBar} from 'react-native';
import PropTypes from 'prop-types';

import {ListItem, Separator} from '../components/List';
import currencies from '../data/currencies';

const CurrencyList = ({navigation}) => {
  const SELECTED_CURRENCY = 'CAD';

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <StatusBar translucent={false} barStyle="light-content" />
      <FlatList
        data={currencies}
        renderItem={({item}) => (
          <ListItem
            text={item}
            selected={item === SELECTED_CURRENCY}
            checked
            onPress={handlePress}
          />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

CurrencyList.propTypes = {
  navigation: PropTypes.object,
};

export default CurrencyList;
