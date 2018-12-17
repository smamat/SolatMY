import React from 'react';
import { Image, View, SafeAreaView } from 'react-native';

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
  <Image source={require('../../assets/wgmoon.jpg')} />
);

const LunarPad = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ flex: 1 }}>
      <MoonPic />
    </View>
  </SafeAreaView>
);

export default LunarPad;
