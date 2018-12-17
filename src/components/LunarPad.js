import React from 'react';
import { Image, View, SafeAreaView } from 'react-native';
/* eslint global-require: "off" */

/*
class MoonPic extends React.Component {
  render() {
    return (
      <Image
        souce={require('../../assets/wgmoon.jpg')}
      />
    );
  }
}
*/

const MoonPic = () => (
  <Image style={{ width: 100, height: 50 }} source={require('../../assets/wgmoon.jpg')} />
);

const LunarPad = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ flex: 1 }}>
      <MoonPic />
    </View>
  </SafeAreaView>
);

export default LunarPad;
