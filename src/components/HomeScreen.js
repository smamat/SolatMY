import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import LunarPad from './LunarPad';
import JakimPad from './JakimPad';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.onPressKawasanPad = this.onPressKawasanPad.bind(this);

    this.state = {
      kawasan: 'WLY01',
    };
  }

  // const { navigation } = this.props;
  // navigation.navigate('Kawasan');
  onPressKawasanPad() {
    // console.log('HomeScreen.onPressKawasanPad()');

    const { navigation } = this.props;
    navigation.navigate('Kawasan');
  }

  onDidFocus() {
    const { navigation } = this.props;
    const kawasan = navigation.getParam('kawasan', 'WLY01');
    // console.log('HomeScreen.onDidFocus()');
    this.setState({ kawasan });
  }

  render() {
    const { navigation } = this.props;
    /* console.log('HomeScreen.navigation: ');
    console.log(navigation); */
    const kawasan = navigation.getParam('kawasan', 'WLY01');
    // console.log(`Homescreen: navigation.kawasan: ${kawasan}`);
    console.log(`HomeScreen.state.kawasan: ${this.state.kawasan}`);

    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          onDidFocus={() => this.onDidFocus()}
        />
        <View style={{ flex: 1 }}>
          <LunarPad />
        </View>
        <View style={{ flex: 2 }}>
          <JakimPad
            onPress={this.onPressKawasanPad}
            kawasan={kawasan}
          />
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
