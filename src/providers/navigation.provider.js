import React from 'react';
import {SCREENS} from '../constants/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function NavigationProvider({children}) {
  const initialRouteName = SCREENS.QIZ_BOX_HOME_SCREEN;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{animation: 'slide_from_right'}}
        initialRouteName={initialRouteName}>
        {children}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationProvider;
