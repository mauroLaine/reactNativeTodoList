import React, {Component} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';

export default class AddTodo extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
          <Text style={{
              fontSize: 20,
              textAlign: 'center',
              padding: 20
          }}>AddTodo</Text>
      </View>
    );
  }
}