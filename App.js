import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  componentDidMount() {
    axios.get('http://192.168.1.128:6969').then((val) => console.log(val)).catch((e) =>console.log(e))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
