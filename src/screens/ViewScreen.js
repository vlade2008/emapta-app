import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Title from '../components/Title';
import { colors, layout } from '../styles';
import Spaces from '../components/Spaces';
import {fetchData} from '../actions/dataActions';

import Icon from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const referral = useSelector(state => state.data.data);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.content1}>
          <Text>
            {item.firstname} {item.lastname}
          </Text>
          <Text style={{color: colors.shade6}}>{item.email}</Text>
        </View>
        <View style={styles.content2}>
          <Text style={{color: colors.shade6}}>{item.mobile}</Text>
        </View>
        <View style={styles.content3}>
          <Text>Action</Text>
        </View>
      </View>
    );
  };

  var newList = referral.filter(element => {
    for (var property in element) {
      if (element.hasOwnProperty(property)) {
        if (element[property] === filter) {
          return true;
        }
      }
    }
  });

  return (
    <View style={styles.container}>
      <Spaces />
      <View style={{paddingHorizontal: layout.paddingHorizontal}}>
        <Title>View Records</Title>
      </View>
      <View style={styles.filter}>
        <TouchableOpacity style={styles.filterButton}>
          <Text>
          <IconFontAwesome
            style={styles.searchIcon}
            name="filter"
            size={18}
            color="green"
          />
          Filter
          </Text>
        </TouchableOpacity>
        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="search1"
            size={18}
            color={colors.backgroundColor}
          />
          <TextInput
            style={styles.input}
            placeholder="User Nickname"
            underlineColorAndroid="transparent"
            onChangeText={setFilter}
            value={filter}
          />
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <View style={styles.content1}>
          <Text>Name</Text>
        </View>
        <View style={styles.content2}>
          <Text>Phone</Text>
        </View>
        <View style={styles.content3}>
          <Text>Action</Text>
        </View>
      </View>
      <FlatList
        data={filter !== '' ? newList : referral}
        keyExtractor={item => item._id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = {
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.sectionHeader,
    height: 50,
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.5,
    borderColor: colors.shade6,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.formBackground,
    height: 50,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 0.5,
  },
  container: {
    backgroundColor: colors.formBackground,
    flex: 1,
  },
  content1: {
    width: '50%',
  },
  content2: {
    width: '35%',
  },
  content3: {
    width: '15%',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sectionHeader,
    margin: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: colors.sectionHeader,
    color: '#424242',
  },
  filter: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  filterButton: {
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.shade6,
    width: 100,
    alignItems: 'center',
  },
};

export default SettingsScreen;
