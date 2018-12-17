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
    // const { navigation } = this.props;
    // const loc = navigation.getParam('itemId', 'WLY01');

    // <Button title="Choose locale" onPress={() => { navigation.navigate('Locale', { itemID: 20, }); }} />
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <LunarPad />
        </View>
        <View style={{ flex: 1 }}>
          <JakimPad />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
