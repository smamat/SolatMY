import React, { Component } from 'react';
import { View } from 'react-native';
import DatePad from './DatePad';
import LocalePad from './LocalePad';
import WaktuPad from './WaktuPad';

// waktu object -> {waktu: "Imsak", time: momentObj, alarm: true}
// datas = [waktuObj1, waktuObj2, ..., waktuObj7]

/*const JakimPad = () => (
  <View style={{ flex: 2 }}>
    <View style={{ flex: 1 }}>
      <LocalePad />
    </View>
    <View style={{ flex: 1 }}>
      <DatePad />
    </View>
    <View style={{ flex: 7 }}>
      <WaktuPad />
    </View>
  </View>
);*/

class JakimPad extends Component {
  constructor(props) {
    super(props);
    this.state = { navigation: props.navigation };
  }

  render() {
    const { navigation } = this.props;

    const loc = navigation.getParam('locale', 'WLY02');
    console.log("JakimPad: " + loc);

    return (
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1 }}>
          <LocalePad navigation={navigation} />
        </View>
        <View style={{ flex: 1 }}>
          <DatePad />
        </View>
        <View style={{ flex: 7 }}>
          <WaktuPad />
        </View>
      </View>
    );
  }
}

export default JakimPad;
