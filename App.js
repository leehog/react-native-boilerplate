//@flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import { url } from './local-url'

type State = {
  
}
 
export default class App extends React.Component<null, State> {
  constructor() {
    super()
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        
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
