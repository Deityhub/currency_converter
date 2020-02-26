import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    mode="card"
    headerMode="screen"
    screenOptions={{
      gestureEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="Options" component={Options} />
    <Stack.Screen name="Themes" component={Themes} />
  </Stack.Navigator>
);

const MyStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" mode="modal">
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({route}) => {
          return {
            headerTitle: route.params.title,
            gestureEnabled: true,
          };
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MyStack;
