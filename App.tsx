/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Welcome from './navigation/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import { AntDesign, Entypo } from 'react-native-vector-icons';
import  AppStateProvider from './src/providers/AppState';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignUp from './navigation/SignUp';
import Login from './navigation/Login';
import Profile from './src/pages/Profile';

const MainStack = createNativeStackNavigator();

const App = () => {
  AntDesign.loadFont();
  return (
    <NavigationContainer>
      <AppStateProvider>
        <MainStack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}>
          {/* Logged out pages */}
          <MainStack.Screen name="Welcome" component={Welcome} />
          <MainStack.Screen
            name="SignUp"
            component={SignUp}
          />
          <MainStack.Screen name="Login" component={Login} />

          {/* Logged in pages */}
          <MainStack.Screen name="Profile" component={Profile} />
        </MainStack.Navigator>
      </AppStateProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pageHeader: {
    flex: 1,
  },
  pageBody: {
    flex: 2,
  },
  pageFooter: {
    flex: 1,
  },
});

export default App;