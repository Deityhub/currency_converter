import React from 'react';
import {FlatList, View, StatusBar} from 'react-native';

import {ListItem, Separator} from '../components/List';
import currencies from '../data/currencies';

const CurrencyList = () => {
  const SELECTED_CURRENCY = 'CAD';

  const handlePress = () => {
    console.log('pressed me');
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

export default CurrencyList;
