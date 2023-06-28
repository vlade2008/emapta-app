import React from 'react';
import {TextInput, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const TextField = props => {
  const {onHandleChange, keyName, value} = props;
  return (
    <TextInput
      onChangeText={e => onHandleChange(keyName, e)}
      style={styles.input}
      value={value || ''}
    />
  );
};

export default TextField;
