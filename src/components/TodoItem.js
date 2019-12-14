
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base'

export default class TodoItem extends Component {
  // 1 easy way to define a state, directly in the class itself
  // commented it since, it gets the data from the server
  // state = {
  //   completed: false
  // }
  // 2 define the initial state define in incoming props  
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     completed: props.title == '1. Go to the store'
  //   }
  // } 
  
  toggleTodo = () => {
    this.props.updateTodo(
      this.props.item.id,
      !this.props.item.completed
    )
  }

  render() {
    console.log("props", this.props)
    const item = this.props.item
    return (
      <TouchableOpacity 
        onPress={this.toggleTodo}
        style={styles.itemButton}>
          <Icon name={item.completed ? 'checkmark-circle' : 'radio-button-off'}/>
          <Text style={[styles.item, {
            opacity: (item.completed ? 0.5: 1.0),
            textDecorationLine: (item.completed ? 'line-through' : 'none')
          }]}>{item.task}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      color: '#333333',
    },
    itemButton: {
      borderBottomWidth: 1,
      borderColor: '#ccc'
    }
  });