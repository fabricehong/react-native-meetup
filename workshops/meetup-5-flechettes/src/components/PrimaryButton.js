import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableHighlight } from 'react-native';


const PrimaryButton = (props)=>{
    const {label, onPress} = props;
    return (
        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.text} >{label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor:'#aaaaff',
      margin: 10,
      padding: 10,
      
    },
    text: {
      textAlign: 'center'
    }
  });
  
export default PrimaryButton;


/* 
export default class App extends Component {
  render() {
    return (
      <View>
        {
          Array.from(Array(n).keys()).map(number => <ScoreButton/>)
        }
        <Text>Hello</Text>
      </View>
    )
  }
}
*/