import React from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import { Constants, Svg } from 'expo';
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
      <Svg height={100} width={100}>
        <Svg.Circle cx={50} cy={50} r={10} strokeWidth={2} stroke="#000000" fill="#11ff11" />
      </Svg>
    </View>
  </SafeAreaView>
);

export default LunarPad;
