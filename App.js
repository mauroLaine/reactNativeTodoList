
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TodoList from './src/components/TodoList';

export default class App extends Component<{}> {
  render() {
    return (
      <TodoList />
    );
  }
}

const styles = StyleSheet.create({

});
