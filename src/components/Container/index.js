import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {colors, layout} from '../../styles';

const Container = props => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingHorizontal: layout.paddingHorizontal,
    backgroundColor: colors.formBackground,
  },
});

export default Container;
