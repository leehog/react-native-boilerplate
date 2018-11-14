//@flow
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { mapViewStyles, customStyle } from './map.style'
import MapView from 'react-native-maps'

type State = {
  
}
type Props = {
  setRestaurant: Function
}

export default class GoogleMap extends React.Component<Props, State> {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.setRestaurant(1)
  }

  render() {
    return (
        <MapView 
          style={mapViewStyles.map}
          customMapStyle={customStyle}
          region={{
            latitude: 59.32932349999999,
            longitude: 18.068580800000063,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        ></MapView>
    );
  }
}