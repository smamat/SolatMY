import React, { Component } from 'react';
import { Text, View, SectionList, Button } from 'react-native';
import localeCode2 from '../data/localeCode.json';
import localeName from '../data/localeName.json';

class LocaleScreen extends Component {
  onPressArea(item) {
    const { navigation } = this.props;
    navigation.navigate('Home', {
      itemId: item,
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

    const itemId = navigation.getParam('itemId', 0);

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
        sections={localeCode2}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

export default LocaleScreen;
