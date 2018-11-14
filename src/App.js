//@flow
import Expo from 'expo'
import React from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

import { styles } from './App.style'
import { url } from './local-url'

type State = {
  
}
 
class App extends React.Component<null, State> {
  constructor() {
    super()
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
      </View>
    );
  }
}

export default Expo.registerRootComponent(App);
