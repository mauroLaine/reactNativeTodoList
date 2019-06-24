
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class TodoItem extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.item}>1. Go to the store</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      color: '#333333',
    },
  });