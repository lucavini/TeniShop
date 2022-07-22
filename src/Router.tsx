import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Detail from './pages/Detail';
import Home from './pages/Home';

export type RootStackProps = {
  Home: undefined,
  Detail: undefined,
}

const Stack = createNativeStackNavigator<RootStackProps>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Detail'
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
