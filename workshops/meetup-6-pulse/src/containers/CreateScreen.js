import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class CreateScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (<Icon name='ios-add-circle' size={25} color={tintColor}/>),
        tabBarLabel: 'Create',
    };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Hangout name</Text>
                    <TextInput style={styles.input}/>
                    <Text>Description</Text>
                    <TextInput style={styles.input} multiline={true} numberOfLines={4}/>
                </View>
                <Button onPress={() => Alert.alert('created')} title="Create"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'
    }
});

export default CreateScreen;