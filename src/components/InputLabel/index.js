import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../styles';

const InputLabel = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default InputLabel;
