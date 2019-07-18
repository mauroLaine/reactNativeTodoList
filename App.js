
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import TodoList from './src/components/TodoList';
import About from './src/components/About';
import AddTodo from './src/components/AddTodo';

const TodoNavigator = createStackNavigator({
  TodoList: {screen: TodoList},
  AddTodo: {screen: AddTodo}
}, {
  mode: 'modal'
});

const TabNavigator = createBottomTabNavigator({
  Home: TodoNavigator,
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