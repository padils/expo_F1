import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/redux_store';
import ScreensNavigator from './src/navigate/screensNavigate';

export default function App() {
  return (
    <Provider store={store}>
      <ScreensNavigator />
    </Provider>

  );
}

