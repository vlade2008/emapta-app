import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../styles';

const Subtitle = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.shade6,
  },
});

export default Subtitle;
