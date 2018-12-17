import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import LocaleScreen from './src/components/LocaleScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Locale: LocaleScreen,
  },
  {
    initialRoutName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
