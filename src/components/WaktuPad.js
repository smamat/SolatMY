import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import WaktuPanel from './WaktuPanel';

// waktu object -> {waktu: "Imsak", time: momentObj, alarm: true}
// datas = [waktuObj1, waktuObj2, ..., waktuObj7]
const table = {
  Imsak: {
    time: '5:30 am',
    isAzan: false,
    isAlarm: false,
    isPrealarm: false,
  },
  Subuh: {
    time: '5:40 am',
    isAzan: false,
    isAlarm: false,
    isPrealarm: false,
  },
  Syuruk: {
    time: '7:03 am',
    isAzan: false,
    isAlarm: false,
    isPrealarm: false,
  },
  Zohor: {
    time: '1:02 pm',
    isAzan: false,
    isAlarm: false,
    isPrealarm: false,
  },
  Asar: {
    time: '4:13 pm',
    isAzan: false,
    isAlarm: false,
    isPrealarm: false,
  },
  Maghrib: {
    time: '7:07 pm',
    isAzan: false,
    isAlarm: false,
    isPrealarm: false,
  },
  Isyak: {
    time: '8:30 pm',
    isAzan: false,
    isAlarm: false,
    isPrealarm: false,
  },
};


class WaktuPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alarmTable: table,
    };

    // this.setAlarm = this.setAlarm.bind(this);
  }

  toggleAlarm(key) {
    console.log(`WaktuPad.toggleAlarm() for ${key}`);
    const { alarmTable } = this.state;
    const waktuTable = alarmTable[key];
    //const { isAlarm } = waktuTable;

    console.log(alarmTable[key]);
    alarmTable[key].isAlarm = !waktuTable.isAlarm;
    console.log(alarmTable[key]);

    this.setState({ alarmTable });
  }

  togglePrealarm(key) {
    console.log(`WaktuPad.togglePrealarm() for ${key}`);
    const { alarmTable } = this.state;
    const waktuTable = alarmTable[key];
    // const { isPrealarm } = waktuTable;

    console.log(alarmTable[key]);
    alarmTable[key].isPrealarm = !waktuTable.isPrealarm;
    console.log(alarmTable[key]);

    this.setState({ alarmTable });
  }

  toggleAzan(key) {
    console.log(`WaktuPad.toggleAzan() for ${key}`);
    const { alarmTable } = this.state;
    const waktuTable = alarmTable[key];

    alarmTable[key].isAzan = !waktuTable.isAzan;
    console.log(alarmTable[key]);

    this.setState({ alarmTable });
  }

  render() {
    const { data } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <WaktuPanel
              waktu={item.key}
              time={item.time}
              toggleAlarm={() => this.toggleAlarm(item.key)}
              togglePrealarm={() => this.togglePrealarm(item.key)}
              toggleAzan={() => this.toggleAzan(item.key)}
            />
          )}
        />
      </View>
    );
  }
}

/*
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
*/

export default WaktuPad;
