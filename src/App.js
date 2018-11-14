//@flow
import React from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import { styles } from './App.style'
import { url } from './local-url'
import GoogleMap from './components/map/map.container'

type State = {
  
}
 
class App extends React.Component<null, State> {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <GoogleMap />
      </View>
    );
  }
}

export default App
