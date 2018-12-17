import React, { Component } from 'react';
import { View, Button } from 'react-native';


class LocalePad extends Component {
  constructor(props) {
    super(props);
    this.state = { navigation: props.navigation };
  }

  render() {
    const { navigation } = this.props;
    const loc = navigation.getParam('locale', '000');
    console.log(`LocalePad: ${loc}`);

    return (
      <View style={{ backgroundColor: 'cyan', flex: 1, justifyContent: 'center' }}>
        <Button
          title={loc}
          onPress={() => {
            navigation.navigate('Locale', { itemID: 20 });
          }}
        />
      </View>
    );
  }
}

export default LocalePad;
