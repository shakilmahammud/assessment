import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TripsScreen from '../screens/TripsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          let IconComponent = focused ? MaterialIcons : Feather;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Trips') {
            IconComponent = focused ? Feather : MaterialIcons;
            iconName = focused ? 'truck' : 'work-outline';
          } else if (route.name === 'Settings') iconName = 'settings';

          return <IconComponent name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#876363',
        tabBarStyle: {
          backgroundColor: '#F5F0F0',
          borderRadius: 8,
          height: 87,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Inter-Medium',
          lineHeight: 18,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trips" component={TripsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
