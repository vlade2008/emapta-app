import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/CreateScreen';
import SettingsScreen from '../screens/ViewScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather'

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Create') {
            iconName = 'shopping-bag';
          } else if (route.name === 'View') {
            iconName = 'shopping-bag';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Create" component={HomeScreen} />
      <Tab.Screen name="View" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
