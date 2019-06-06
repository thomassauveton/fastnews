import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

// Imports of my nav components
import {createAppContainer, createStackNavigator} from 'react-navigation';

// Imports of my screens componenents in order to wrap them correctly in my
// navigation
import SignScreen from '../screens/SignScreen';
import HomeScreen from '../screens/HomeScreen';
import SwipeScreen from '../screens/SwipeScreen';
import AccountScreen from '../screens/AccountScreen';
import SelectionScreen from '../screens/SelectionScreen';

// Here, I can create the global navigation which both contains my three first
// page (without the bottom tab) as well as the whole MainNavigator component
var StackNavigator = createStackNavigator({
  // pages de ma navigation sans bottom (l'ordre sera l'ordre d'affichage)
  SignIn: SignScreen,
  Home: HomeScreen,
  Profil: AccountScreen,
  Selection: SelectionScreen,
  News: SwipeScreen,

  // MainNavigator must my put inside the stack navigator (necessaire pour
  // rappeler une nav dans la nav firts) ? MainNavigator: MainNavigator
}, {headerMode: 'none'})

// Finally, we just need to export StackNavigator (which contains all our
// screens) into the createAppContainer given function
export default Navigation = createAppContainer(StackNavigator);
