import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

const hmonth = {
  '01': 'Muharram',
  '02': 'Safar',
  '03': 'Rabiulawal',
  '04': 'Rabiulakhir',
  '05': 'Jamadilawal',
  '06': 'Jamadilakhir',
  '07': 'Rejab',
  '08': 'Syaaban',
  '09': 'Ramadan',
  '10': 'Syawal',
  '11': 'Zulkaedah',
  '12': 'Zulhijjah',
};

const gmonth = {
  Jan: 'Januari',
  Feb: 'Februari',
  Mac: 'Mac',
  Apr: 'April',
  Mei: 'Mei',
  Jun: 'Jun',
  Jul: 'Julai',
  Ogo: 'Ogos',
  Sep: 'September',
  Okt: 'Oktober',
  Nov: 'November',
  Dis: 'Disember',
};

class DatePad extends Component {
  constructor(props) {
    super(props);
    const { hijri, date } = this.props;

    // hijri date reformatting
    const hy = hijri.slice(0, 4);
    const hm = hmonth[hijri.slice(5, 7)];
    const hd = hijri.slice(8, 10);

    // greg date reformatting
    const gy = date.slice(7, 11);
    const gm = gmonth[date.slice(3, 6)];
    const gd = date.slice(0, 2);

    this.state = {
      hdate: `${hd} ${hm} ${hy}`,
      gdate: `${gd} ${gm} ${gy}`,
      isHijri: true,
    };
  }

  /* const hdate = `${dd} ${mo} ${yy}`;
  const gdate = new Date(); */
  toggleDate() {
    const { isHijri } = this.state;
    this.setState({
      isHijri: !isHijri,
    });

    console.log(`DatePad.toggleDate().isHijri: ${isHijri}`);
  }

  render() {
    const { isHijri, hdate, gdate } = this.state;
    console.log(`isHijri: ${isHijri}`);

    return (
      <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => this.toggleDate()}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>{isHijri ? hdate : gdate}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DatePad.propTypes = {
  hijri: PropTypes.string,
  date: PropTypes.string,
};

DatePad.defaultProps = {
  hijri: '1440-01-01',
  date: '1-Jan-2018',
};

export default DatePad;
