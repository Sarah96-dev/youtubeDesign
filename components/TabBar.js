import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.container}>
          <Icon style={styles.icon} name="home" size={27}></Icon>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.container}>
          <Icon style={styles.icon} name="whatshot" size={27}></Icon>
          <Text style={styles.text}>whatsHot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Icon style={styles.icon} name="subscriptions" size={27}></Icon>
          <Text style={styles.text}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Icon style={styles.icon} name="add-alert" size={27}></Icon>
          <Text style={styles.text}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Icon style={styles.icon} name="folder" size={27}></Icon>
          <Text style={styles.text}>Library</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
   
    backgroundColor: '#f5f6fa',
    height: 60,
    borderTopWidth: 2,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 2,
    fontSize: 12,
    textAlign: 'center',
  },
  icon: {
   
  },
});
