
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class About extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({tintColor }) => (
      <Image style={[styles.icon, {tintColor}]} source={CheckImage}/>
    ),
    tabBarLabel: 'About'
  }

  render() {
    return (
      <View style={{flex: 1}}>
          <Text style={{
              fontSize: 20,
              textAlign: 'center',
              padding: 20
          }}>About</Text>
      </View>
    );
  }
}