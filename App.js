
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import TodoList from './src/components/TodoList';
import About from './src/components/About';

const TabNavigator = createBottomTabNavigator({
  Home: TodoList,
  Settings: About,
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#0066cc'
    }
  });

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component{
  render() {
    return (
      <AppContainer />
    );
  }
}