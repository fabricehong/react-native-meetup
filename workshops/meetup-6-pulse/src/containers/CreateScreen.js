import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Screen from '../components/Screen';

class CreateScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (<Icon name='ios-add-circle' size={25} color={tintColor}/>),
        tabBarLabel: 'Create',
    };
    render() {
        return (
            <Screen>
                <View style={styles.container}>
                    <View>
                        <Text>Hangout name</Text>
                        <TextInput style={styles.input} placeholder="Que fais-tu ?"/>
                        <Text>Description</Text>
                        <TextInput style={styles.input} multiline={true} numberOfLines={4} placeholder="Plus de détails"/>
                    </View>
                    <Button onPress={() => Alert.alert('created')} title="Create"/>
                </View>
            </Screen>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'
    },
    input: {
        marginBottom: 10,
    }
});

export default CreateScreen;