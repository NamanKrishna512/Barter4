import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/DonateScreen';
import BookRequestScreen from '../screens/RequestScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateScreen : {
    screen: DonateScreen,
    navigationOptions :{
  
      tabBarLabel : "Donate",
    }
  },
  RequestScreen: {
    screen: RequestScreen,
    navigationOptions :{
      
      tabBarLabel : "Request",
    }
  }
});
