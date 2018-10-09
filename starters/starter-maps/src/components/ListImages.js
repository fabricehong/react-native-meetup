
import React, {Component} from 'react';
import { Text, View, Image, Dimensions, ScrollView } from 'react-native';

let id = 0;
const { width, height } = Dimensions.get('window');

const ListImages = ({ imagesTab }) => {

    const { container } = styles;

    // console.log(' imagesTab => ' + imagesTab);
    return (
        <ScrollView
            style={container}
            horizontal={true}>
                {imagesTab.map( (im, cmp) => (
                    console.log(im) ,
                        <View
                            style={styles.containerImage}
                            key={cmp}>
                            <Image
                                key={cmp}
                                style={{width : 100, height: 100 }}
                                source={{uri: im }}
                                // source={require( im )}
                            />
                        </View>
                ))}
        </ScrollView>
    )

}

const styles = {
    container : {
        // flex: 1,
        // width: width,
        // height: 200,

        // justifyContent: 'space-around',
        // alignItems: 'center',
        // flexDirection: 'row',

        // backgroundColor: 'green',
        // borderWidth: 10,
        borderColor: '#FFF',
        borderBottomWidth: 10,
        borderTopWidth: 10,

    },
    containerImage: {
        paddingHorizontal: 10,
    },
}

export default ListImages;

