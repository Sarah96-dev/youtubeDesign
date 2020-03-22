import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from './components/NavBar'
import TabBar from './components/TabBar'
import data from'./components/images/search.json'
import Body from './components/Body'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    
    
    return (
      <View style={styles.container}>
        <NavBar />
        <ScrollView style={styles.scroll}>

       
        <Body video={data.items[0]} />
        <Body video={data.items[1]} />
        <Body video={data.items[2]} />
        <Body video={data.items[3]} />
        <Body video={data.items[4]} />
        
        </ScrollView>
      
      
      <TabBar />
      
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  
 
});