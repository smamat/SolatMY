import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';


const KawasanPad = ({ onPress, kawasan }) => (
  <View style={{ backgroundColor: 'cyan', flex: 1, justifyContent: 'center' }}>
    <Button title={kawasan} onPress={onPress} />
  </View>
);

KawasanPad.propTypes = {
  onPress: PropTypes.func,
  kawasan: PropTypes.string,
};

KawasanPad.defaultProps = {
  onPress: () => { console.log('default KawasanPad.onPress()'); },
  kawasan: 'WLY01',
};

export default KawasanPad;
