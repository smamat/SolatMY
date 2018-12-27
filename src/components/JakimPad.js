import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import DatePad from './DatePad';
import KawasanPad from './KawasanPad';
import WaktuPad from './WaktuPad';
/* global fetch: false */
/* eslint no-console: "off" */

// waktu object -> {waktu: "Imsak", time: momentObj, alarm: true}
// datas = [waktuObj1, waktuObj2, ..., waktuObj7]

class JakimPad extends Component {
  constructor(props) {
    super(props);

    // -must consider when kawasan is default?
    this.state = {
      loading: true,
      error: false,
      resp: [],
    };

    // this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    const { kawasan } = this.props;
    this.fetchData(kawasan);
  }

  componentDidUpdate(prevProps) {
    const { kawasan } = this.props;
    console.log('JakimPad.componentDidUpdate(): ');
    if (kawasan !== prevProps.kawasan) {
      console.log('JakimPad.props have changed!');
      this.fetchData(kawasan);
    }
  }

  // - need to do direct call on props.onPress passed by parent
  /* onPress() {
    this.props.onPress();
  } */

  async fetchData(kawasan) {
    const url = `https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=${kawasan}`;

    try {
      console.log(`JakimPad.fetchData(${kawasan})`);
      const response = await fetch(url);
      const resp = await response.json();
      console.log(resp);

      this.setState({ loading: false, resp });
    } catch (e) {
      console.log(`Caught exception in fetchData(): ${e}`);
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    const { loading, error, resp } = this.state;
    const { kawasan } = this.props;

    if (loading) {
      console.log('JakimPad: still loading');
      return (
        <View style={{ flex: 1 }}>
          <KawasanPad />
          <DatePad />
          <Text>Still loading PrayerPad</Text>
        </View>
      );
    }

    if (error) {
      console.log('caught error...');
      return (
        <View style={{ flex: 1 }}>
          <KawasanPad />
          <DatePad />
          <Text>Error loading PrayerPad</Text>
        </View>
      );
    }

    // - set salat times from fetched data
    const { prayerTime } = resp;
    // const { fajr, dhuhr, asr, maghrib, isha, date, hijri } = prayerTime[0];
    const { fajr, dhuhr, asr, maghrib, isha } = prayerTime[0];
    const times = [fajr, dhuhr, asr, maghrib, isha];

    console.log(times);

    console.log('JakimPad: done loading');

    return (
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1 }}>
          <KawasanPad
            onPress={this.props.onPress}
            kawasan={kawasan}
          />
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

/*
JakimPad.propTypes = {
  onClickKawasanpad: PropTypes.
};
*/
JakimPad.propTypes = {
  onPress: PropTypes.func.isRequired,
  kawasan: PropTypes.string,
};

JakimPad.defaultProps = {
  kawasan: 'WLY01',
};

export default JakimPad;
