import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable-row';
import WaktuPanel from './WaktuPanel';

// waktu object -> {waktu: "Imsak", time: momentObj, alarm: true}
// datas = [waktuObj1, waktuObj2, ..., waktuObj7]
const datas = [
  { key: "Imsak", time: "5:30 am", alarm: true },
  { key: "Subuh", time: "5:40 am", alarm: true },
  { key: "Syuruk", time: "7:01 am", alarm: true },
  { key: "Zohor", time: "1:03 pm", alarm: true },
  { key: "Asar", time: "4:40 pm", alarm: true },
  { key: "Maghrib", time: "7:28 pm", alarm: true },
  { key: "Isyak", time: "8:27 pm", alarm: true },
];

class WaktuPad extends React.Component {

  renderItem = ({ item }) => (
    <WaktuPanel waktu={item.key} time={item.time} />
  );

  render() {
    return (
      <View style={{flex:1, justifyContent: 'space-between'}}>
        <FlatList
          data={datas}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = {
  panelStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    height: 50,
    fontSize: 20,
  },
  leftSwipeItem: {
    backgroundColor: 'lightseagreen',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
}

export default WaktuPad;
