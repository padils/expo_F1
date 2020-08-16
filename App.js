import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/redux_store';
import ScreensNavigator from './src/navigate/scrensNavigate';

export default function App() {
  return (
    <Provider store={store}>
      <ScreensNavigator />
    </Provider>

  );
}





const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
