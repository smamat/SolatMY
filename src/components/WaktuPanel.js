import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable-row';

class WaktuPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // azan: false,
      alarm0: false,
      alarm10: false,
    };
  }

  onPress0() {
    const { alarm0 } = this.state;

    // toggle alarm
    console.log('onPress');
  }

  render() {
    const { waktu, time } = this.props;
    const { alarm0, alarm10 } = this.state;

    return (
      <Swipeable
        leftContent={(
          <View style={styles.leftSwipeItem}>
            <Text style={{ color: 'white' }}>Azankan</Text>
          </View>
        )}
        rightButtons={[
          <TouchableOpacity
            onPress={this.onPress0}
            style={[styles.rightSwipeItem, { backgroundColor: alarm0 ? 'blue' : 'red' }]}
          >
            <Text>Alarm 0</Text>
          </TouchableOpacity>,
          <TouchableOpacity
            onPress={this.onPress10}
            style={[styles.rightSwipeItem, { backgroundColor: alarm10 ? 'blue' : 'red' }]}
          >
            <Text>Alarm 10</Text>
          </TouchableOpacity>
        ]}
      >
        <View style={styles.panelStyle}>
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
