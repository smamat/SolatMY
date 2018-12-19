import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, SectionList, Button } from 'react-native';
import localeCode from '../data/localeCode.json';
import localeName from '../data/localeName.json';

class LocaleScreen extends Component {
  onPressArea(item) {
    const { navigation } = this.props;
    navigation.navigate('Home', {
      locale: item,
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
    // const locale = navigation.getParam('locale', 0);

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

LocaleScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LocaleScreen;
