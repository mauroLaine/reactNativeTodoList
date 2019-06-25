
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class TodoItem extends Component {
  // 1 easy way to define a state, directly in the class itself
  state = {
    completed: false
  }
  // 2 define the initial state define in incoming props  
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     completed: props.title == '1. Go to the store'
  //   }
  // } 
  
  toggleTodo = () => {
    this.setState({completed: !this.state.completed})
  }

  render() {
      console.log("props", this.props)
    return (
      <TouchableOpacity onPress={this.toggleTodo}>
          <Text style={[styles.item, {
            backgroundColor: (this.state.completed ? 'grey': 'transparent')
          }]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      color: '#333333',
    },
  });