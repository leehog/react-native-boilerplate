import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import { url } from './local-url'
 
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: ''
    }
  }
  componentDidMount() {
    axios.get( url )
      .then(res => {
        this.setState({
          msg: res.data.message
        }, () => {
          console.log(res.data.message)
        })
      })
      .catch(err => {
        console.log(err)
      }) 
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.msg}
        </Text>
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
