import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const PrimaryButton = (props) => {

  const {label, onPress, disabled} = props;

  return (<TouchableHighlight disabled={disabled} style={disabled
    ? styles.disabledButton
    : styles.button}
                              onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableHighlight>);
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#aaaaff', margin: 10, padding: 10,

  }, disabledButton: {
    backgroundColor: 'grey', margin: 10, padding: 10,

  }, text: {
    textAlign: 'center',
  },
});

export default PrimaryButton;