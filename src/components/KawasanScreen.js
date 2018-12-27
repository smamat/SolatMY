import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, SectionList, Button } from 'react-native';
import localeCode from '../data/localeCode.json';
import localeName from '../data/localeName.json';

class KawasanScreen extends Component {
  onPressArea(item) {
    const { navigation } = this.props;
    // console.log("KawasanScreen.onPressArea: " + item);
    navigation.navigate('Home', {
      kawasan: item,
    });
  }

  renderItemFull(index, item) {
    return (
      <Button
        key={index}
        title={localeName[item]}
        onPress={() => this.onPressArea(item)}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    //console.log('KawasanScreen.navigation: ');
    //console.log(navigation);

    return (
      <SectionList
        renderItem={({ item, index, section }) => (
          this.renderItemFull(index, item)
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
          </View>
        )}
        sections={localeCode}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

KawasanScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default KawasanScreen;
