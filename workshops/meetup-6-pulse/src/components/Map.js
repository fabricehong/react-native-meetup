import React, {Component} from 'react';

// import { View, Text, Dimensions, StyleSheet } from 'react-native';
import {Dimensions, StyleSheet, View} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import ListImages from './ListImages'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 46.517267;
const LONGITUDE = 6.628972;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component<Props> {

    state = {
        region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        markers: [],
        tabRetenu: [],
        images:[],
    }

    mapViewOnPress(event) {
        if(this.state.tabRetenu.length > 0) {
            this.setState({tabRetenu : []}) ;
            return;
        }

        const { coordinate , position } = event.nativeEvent;

        // let markers = this.state.markers;
        // markers.push(event.nativeEvent.coordinate);
        // this.setState({markers: markers});

        console.log('this.state => ' + this.state );
        console.log('nb element => ' + this.state.markers.length );

        var tabImage = [];
        for(let i=0; i<5;i++) {
            let n = Math.floor(Math.random() * 20);
            tabImage.push(this.state.images[n])
        }

        let markers = this.state.markers;
        markers.push({coordinate: event.nativeEvent.coordinate, tabImage: tabImage });
        this.setState({markers: markers});

    }

    markerOnPress(event) {
        const { coordinate, position } = event.nativeEvent
        this.state.markers.forEach(ele => {
            if(ele.coordinate.longitude === coordinate.longitude &&
                ele.coordinate.latitude === coordinate.latitude) {
                this.setState({ tabRetenu: ele.tabImage });
            }
        })
    }

    // cssDynamicMap = function () {
    //     return (this.state.tabRetenu.length > 0 )? {flex: 5} : {...StyleSheet.absoluteFillObject};
    // }

    // cssDynamicImages = function() {
    //     return (this.state.tabRetenu.length > 0 )? {flex: 2} : {display : 'none'};
    // }

    renderImages() {
        debugger;
        if(this.state.tabRetenu.length == 0) return;
        return (<ListImages imagesTab={this.state.tabRetenu} />);
    }

    render() {
        return (
            <View style={styles.containers}>
              <MapView
              zoomControlEnabled={true}
                  style={(this.state.tabRetenu.length > 0 )? {flex: 5} : {...StyleSheet.absoluteFillObject}}
                  // style={styles.map}
                  region={this.state.region}
                  onPress={ (event) => this.mapViewOnPress(event) }
                  onRegionChangeComplete={(reg) => this.setState({ region: reg }) }
              >
                  {this.state.markers.map((mark, i) => (
                      <Marker
                          key={i}
                          coordinate={mark.coordinate}
                          onPress={(event) => this.markerOnPress(event)}
                      />
                  ))}
              </MapView>

              <View style={(this.state.tabRetenu.length > 0 )? {flex: 2} : {display : 'none'}}>
                  {/*<View style={this.cssDynamicImages()}>*/}
                  {this.renderImages()}
              </View>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    containers: {
        flex: 1,

        // ...StyleSheet.absoluteFillObject
    },
    // map: {
    //     width: width,
    //     height: height,
    //     // ...StyleSheet.absoluteFillObject
    // },

});



