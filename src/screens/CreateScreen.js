import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useDispatch,  useSelector } from 'react-redux';
import Container from '../components/Container';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Space from '../components/Space';
import TextField from '../components/TextField';
import InputLabel from '../components/InputLabel';
import DropDownPicker from 'react-native-dropdown-picker';
import { postData, fetchData } from '../actions/dataActions';
import { colors } from '../styles';


const initialState = {
  referral: {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    address: '',
    address2: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
  },
};

const HomeScreen = () => {
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const error = useSelector(state => state.data.error);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Philippines', value: 'Philippines'},
    {label: 'Singapore', value: 'Singapore'},
  ]);

  const [openState, setOpenState] = useState(false);
  const [itemsState, setItemsState] = useState([
    {label: 'Manila', value: 'Manila'},
    {label: 'Cebu', value: 'Cwbu'},
  ]);

  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const Success = () =>
    Alert.alert('Success', 'Success', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  const Error = () =>
    Alert.alert('Error', error, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);


  const onHandleChange = (keyName, value) => {
    setformData({
      ...formData,
      referral: {...formData.referral, [keyName]: value},
    });
  };

  const onSubmit = () => {
    dispatch(postData(formData.referral));
    dispatch(fetchData());
    setformData(initialState);
    if (error !== '') {
      Error();
    } else {
      Success();
    }
  };

  const isValid = () => {
    return (
      formData.referral.firstname !== '' &&
      formData.referral.lastname !== '' &&
      formData.referral.mobile !== '' &&
      formData.referral.email !== ''
    );
  };

  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1, justifyContent: 'center'}}
          behavior="padding">
          <Title>Referral Builder</Title>
          <Subtitle>Personal details</Subtitle>
          <Space />
          <InputLabel>First Name</InputLabel>
          <TextField
            onHandleChange={onHandleChange}
            keyName="firstname"
            value={formData.referral.firstname}
          />
          <InputLabel>Last Name</InputLabel>
          <TextField
            onHandleChange={onHandleChange}
            keyName="lastname"
            value={formData.referral.lastname}
          />
          <InputLabel>Email</InputLabel>
          <TextField
            onHandleChange={onHandleChange}
            keyName="email"
            value={formData.referral.email}
          />
          <InputLabel>Mobile</InputLabel>
          <TextField
            onHandleChange={onHandleChange}
            keyName="mobile"
            value={formData.referral.mobile}
          />
          <InputLabel>Address Line 1</InputLabel>
          <TextField
            onHandleChange={onHandleChange}
            keyName="address"
            value={formData.referral.address}
          />
          <InputLabel>Address Line 2</InputLabel>
          <TextField
            onHandleChange={onHandleChange}
            keyName="address2"
            value={formData.referral.address2}
          />
          <InputLabel>Suburb</InputLabel>
          <TextField
            onHandleChange={onHandleChange}
            keyName="suburb"
            value={formData.referral.suburb}
          />
          <InputLabel>State</InputLabel>
          <DropDownPicker
            style={{ borderWidth: 0.5, borderColor: colors.shade6}}
            open={openState}
            value={formData.referral.state}
            items={itemsState}
            setOpen={setOpenState}
            setValue={value => onHandleChange('state', value())}
            setItems={setItemsState}
            listMode="SCROLLVIEW"
          />
          <InputLabel>Postcode</InputLabel>
          <TextField
            onHandleChange={onHandleChange}
            keyName="postcode"
            value={formData.referral.postcode}
          />
          <InputLabel>Country</InputLabel>
          <DropDownPicker
            style={{ borderWidth: 0.5, borderColor: colors.shade6}}
            open={open}
            value={formData.referral.country}
            items={items}
            setOpen={setOpen}
            setValue={value => onHandleChange('country', value())}
            setItems={setItems}
            listMode="SCROLLVIEW"
          />
          <View style={{padding: 10}}>
            <TouchableOpacity
              disabled={!isValid()}
              onPress={onSubmit}
              style={{
                backgroundColor: '#05a87b',
                padding: 15,
                alignItems: 'center',
                flex: 1,
                borderRadius: 5,
                marginTop: 20,
                opacity: !isValid() ? 0.1 : 1,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Create referral</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
