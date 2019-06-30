
import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, StatusBar} from 'react-native';
import TodoItem from './TodoItem';


export default class TodoList extends Component {
  render() {
    const thirdTask = "Bring it back"
    const items = [
      "1. Go to the store",
      "2. " + "Get the milk",
      `3. ${thirdTask}`
    ]
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo List</Text>
        </View>
        <FlatList
          data={items}
          style={styles.content}
          renderItem = {(row) => {
            return <TodoItem title={row.item} />
          }}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 10,
      paddingTop: 20,
      alignSelf: 'stretch',
      backgroundColor: '#2288ee',
      borderBottomWidth: 1,
      borderColor: '#0066cc',
    },
    headerText: {  
      fontSize: 20,
      textAlign: 'center',
      color: '#ffffff'
    },
    content:{
      flex: 1,
      alignSelf: 'stretch'
    }
  });