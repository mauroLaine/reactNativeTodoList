
import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import TodoList from './src/components/TodoList';
import About from './src/components/About';
import AddTodo from './src/components/AddTodo';
import AboutImage from './src/images/star.png';
import CheckImage from './src/images/check.png';

const TodoNavigator = createStackNavigator({
  TodoList: {screen: TodoList},
  AddTodo: {screen: AddTodo}
}, {
  mode: 'modal'
});

const TabNavigator = createBottomTabNavigator({
  Home: {screen: TodoNavigator,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Image style={[styles.icon, {tintColor}]} source={CheckImage}/>
      )
  }) },
  Settings: {screen: About,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Image style={[styles.icon, {tintColor}]} source={AboutImage}/>
      )
  })
  },
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

const styles = StyleSheet.create({
  icon: {
    height: 24,
    resizeMode: 'contain'
  }
  });