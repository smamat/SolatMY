import React from 'react';
import { View } from 'react-native';
import DatePad from './DatePad';
import LocalePad from './LocalePad';
import WaktuPad from './WaktuPad';

// waktu object -> {waktu: "Imsak", time: momentObj, alarm: true}
// datas = [waktuObj1, waktuObj2, ..., waktuObj7]

const fetchedData = [
  { key: 'Imsak', time: '5:30 am' },
  { key: 'Subuh', time: '5:40 am' },
  { key: 'Syuruk', time: '7:01 am' },
  { key: 'Zohor', time: '1:03 pm' },
  { key: 'Asar', time: '4:40 pm' },
  { key: 'Maghrib', time: '7:28 pm' },
  { key: 'Isyak', time: '8:27 pm' },
];

const JakimPad = (props) => {
  const { navigation } = props;

  return (
    <View style={{ flex: 2 }}>
      <View style={{ flex: 1 }}>
        <LocalePad navigation={navigation} />
      </View>
      <View style={{ flex: 1 }}>
        <DatePad />
      </View>
      <View style={{ flex: 7 }}>
        <WaktuPad data={fetchedData} />
      </View>
    </View>
  );
};

export default JakimPad;
