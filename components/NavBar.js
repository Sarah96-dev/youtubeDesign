import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            style={styles.logo}
            source={require('./images/youtube.png')}></Image>
          <View style={styles.moveright}>
            <TouchableOpacity>
              <Icon name="search" size={30} style={styles.iconStyle}></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="account-circle"
                size={30}
                style={styles.iconStyle}></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  navbar: {
    height: 55,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    marginLeft: 9,
    width: 120,
    height: 26,
  },
  moveright: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  iconStyle: {
    margin: 7,
  },
});
