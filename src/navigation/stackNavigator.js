import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen/StartScreen';
import InformationScreen from '../screens/userInformation/index';
import HomeScreen from '../screens/Home/Home';
import GiftScreen from '../screens/Gift/Gift';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none"
       screenOptions={{
        headerTitleAlign: 'center',
        ...TransitionPresets.FadeFromBottomAndroid,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        backgroundColor: 'black'
        }}>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="InformationScreen"
          component={InformationScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialRouteName='Home'
        />
         <Stack.Screen
          name="Gift"
          component={GiftScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}