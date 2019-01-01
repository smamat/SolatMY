import React, { Component } from 'react';
import { View } from 'react-native';
import LunarPad from './LunarPad';
import JakimPad from './JakimPad';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { locale: 'WLY01' };
  }

  render() {
    const { navigation } = this.props;
    // const loc = navigation.getParam('itemId', 'WLY01');

    const loc = navigation.getParam('locale', 'WLY02');
    console.log(`HomeScreen: ${loc}`);

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <LunarPad />
        </View>
        <View style={{ flex: 2 }}>
          <JakimPad navigation={navigation} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
