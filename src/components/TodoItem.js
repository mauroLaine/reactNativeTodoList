
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class TodoItem extends Component {
  render() {
      console.log("props", this.props)
    return (
      <View style={styles.container}>
          <Text style={styles.item}>{this.props.title}</Text>
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