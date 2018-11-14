import * as Expo from 'expo'
import React from 'react'
import { View, Text } from 'react-native'

import App from './App'

class index extends React.Component {
    render() {
        return(
            <App />
        )
    }
}

export default Expo.registerRootComponent(index);