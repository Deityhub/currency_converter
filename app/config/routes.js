import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

const Stack = createStackNavigator();

const MyStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({route}) => {
          return {
            headerTitle: route.params.title,
          };
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MyStack;
