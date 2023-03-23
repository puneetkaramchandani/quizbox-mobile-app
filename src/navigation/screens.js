import * as React from 'react';
import Home from '../screens/home';
import {SCREENS} from '../constants/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartQuiz from '../screens/startQuiz';
import PlayQuiz from '../screens/playQuiz';

const Stack = createNativeStackNavigator();

function screens() {
  return (
    <>
      <Stack.Screen
        name={SCREENS.QIZ_BOX_HOME_SCREEN}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.QIZ_BOX_START_QUIZ_SCREEN}
        component={StartQuiz}
        options={{
          headerShown: true,
          title: 'Start Quiz',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009a66',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name={SCREENS.QIZ_BOX_PLAY_QUIZ_SCREEN}
        component={PlayQuiz}
        options={{
          headerShown: true,
          title: 'Play Quiz',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#009a66',
          },
          headerTintColor: 'white',
        }}
      />
    </>
  );
}

export default screens;
