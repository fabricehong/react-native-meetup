import React, {Component} from 'react';
import axios from 'axios';

// import { View, Text, Dimensions, StyleSheet } from 'react-native';
import {Image, Dimensions, StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
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

    componentWillMount() {
        var tab = this.state.images;
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => (
                response.data.map(ele => (
                    tab.push(ele.image)
                ))
            ));

        tab.push('https://fr.cdn.v5.futura-sciences.com/buildsv6/images/largeoriginal/4/5/e/45eaf12d11_50006276_collide-240908a.jpg');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyGTLqr3qaTRhVea-Cj0h4NsRb8JxdMwgEo0jrfmdEnpPxzds');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMquT4edFXlrZx_w8xe3W9R1stZbMHpThD-Kmu7KGQ8DZDwooJ');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuQJjnmeIVKyCWSOE0YqMtn-_aLvPuckYRUT2S9rmm0QPAuJZ');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujpFy598UPAtm_p-K8CvAmsLpgjoBWiFhGcv4Bmym_beKb6yb');

        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1a_hrWY1CjmPAHuDnyfiEgBaXm2AuC8wwwgZD8mTijmUih-r');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMAdL1rfMwwylIGlhgFRKsWE8HGnPvBgY1yxzTfhdSRVW-JGMgQ');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6Ag4adVoCvYe3mfmzS_tPlvkHyOuqRhyksuRtL9mTr1v2nUE');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSn32Z2UsElUJn4pMqNUpJ5cdQ2ZUOkn2vOKEwNlA0h9Yq3gnUkA');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1l7NPEiXMrBMkC6WOIvE6Vy2jpU1YBuW9HbrxzAANeftHkAEb');

        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdor4htfHXn1hB1N85PdPbrJgfSw2kqeFQTod8xzZYEHKQKy0');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBb10xstqTAablsGQmPUoxwTHHJyH80j3FSuC3FG8n7l_IFmJ');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpBgtmMSZyBbECNNJKs7J8b-F0ji2AQdV7CCF_JJK5zC2zeAU');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmA9e4su2Ibhl9FJSY0sz79W72wp99q5gDb4SEO-aVDkZ4YCV1g');
        tab.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rsT7bNNyT84xaMds2gXCYyBXu9Cg3OYaVPLM9dFGruwmix2N');

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
        width: width,
        height: height,

        // ...StyleSheet.absoluteFillObject
    },
    // map: {
    //     width: width,
    //     height: height,
    //     // ...StyleSheet.absoluteFillObject
    // },

});



