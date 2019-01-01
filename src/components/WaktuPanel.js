import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable-row';
import { Svg } from 'expo';
/* eslint no-use-before-define: ["error", { "variables": false }] */

const AlarmIcon = ({ isSet }) => {
  const fillColour = isSet ? 'black' : 'gray';
  return (
    <Svg height={30} width={30}>
      <Svg.Circle cx={15} cy={15} r={10} strokeWidth={2} stroke="#fff" fill={fillColour} />
    </Svg>
  );
};

const AzanIcon = ({ isSet }) => {
  const fillColour = isSet ? 'green' : 'lightseagreen';
  return (
    <Svg height={30} width={30}>
      <Svg.Circle cx={15} cy={15} r={10} strokeWidth={2} stroke="#fff" fill={fillColour} />
    </Svg>
  );
};

class WaktuPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAzan: false,
      isAlarm: false,
      isPrealarm: false,
      leftActionActivated: false,
    };
  }

  // - not sure why this function is needed
  onLeftActionActivate() {
    this.setState({ leftActionActivated: true });
    console.log(`onLeftActionActivate(): isAzan = ${this.state.isAzan}`);
  }

  // - not sure why this function is needed
  onLeftActionDeactivate() {
    this.setState({ leftActionActivated: false });
    console.log('onLeftActionDeactivate()');
  }

  onLeftActionComplete(key) {
    this.setState(prevState => ({ isAzan: !prevState.isAzan }));
    this.props.toggleAzan(key);
  }

  toggleAlarm(key) {
    console.log('WaktuPanel.toggleAlarm()');
    this.setState(prevState => ({ isAlarm: !prevState.isAlarm }));
    this.props.toggleAlarm(key);
  }

  togglePrealarm(key) {
    console.log('WaktuPanel.togglePrealarm()')
    this.setState(prevState => ({ isPrealarm: !prevState.isPrealarm }));
    this.props.togglePrealarm(key);
  }

  render() {
    const { waktu, time } = this.props;
    const { isAzan, isAlarm, isPrealarm } = this.state;

    return (
      <Swipeable
        leftContent={(
          <View style={styles.leftSwipeItem}>
            <AzanIcon isSet={isAzan} />
          </View>
        )}
        onLeftActionActivate={() => this.onLeftActionActivate()}
        onLeftActionDeactivate={() => this.onLeftActionDeactivate()}
        onLeftActionComplete={() => this.onLeftActionComplete(waktu)}
        leftActionActivationDistance={75}
        rightButtons={[
          <TouchableOpacity
            onPress={() => this.toggleAlarm(waktu)}
            style={[styles.rightSwipeItem, { backgroundColor: 'blue' }]}
          >
            <AlarmIcon isSet={isAlarm} />
          </TouchableOpacity>,
          <TouchableOpacity
            onPress={() => this.togglePrealarm(waktu)}
            style={[styles.rightSwipeItem, { backgroundColor: 'red' }]}
          >
            <AlarmIcon isSet={isPrealarm} />
          </TouchableOpacity>
        ]}
      >
        <View style={[styles.panelStyle, { backgroundColor: isAzan ? 'lightgreen' : 'white' }]}>
          <Text style={{ fontSize: 24 }}>{waktu}</Text>
          <Text style={{ fontSize: 24 }}>{time}</Text>
        </View>
      </Swipeable>
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
};

export default WaktuPanel;
