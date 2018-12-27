import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import KawasanScreen from './src/components/KawasanScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Kawasan: KawasanScreen,
  },
  {
    initialRoutName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

/*
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
*/

const App = () => (
  <AppContainer />
);

export default App;
