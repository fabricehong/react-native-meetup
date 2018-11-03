import React from 'react';
import {Platform, View, StyleSheet} from 'react-native';

const Screen = (props)=>{
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            paddingTop: (Platform.OS === 'ios') ? 18 : 0,
            flex: 1,
            backgroundColor: 'white',
        }
    }
);

export default Screen;