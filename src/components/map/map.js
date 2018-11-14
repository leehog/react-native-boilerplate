//@flow
import React from 'react'
import { StyleSheet, View } from 'react-native'
//import { styles } from '../App.style'
import MapView from 'react-native-maps';

type State = {
  
}
type Props = {

}

const mapStyle = [
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 45
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#88e9ad"
          },
          {
              "visibility": "on"
          }
      ]
  }
]

export default class GoogleMap extends React.Component<Props, State> {
  constructor() {
    super()
  }

  render() {
    return (
        <MapView 
          style={styles.map}
          customMapStyle={mapStyle}
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

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})
