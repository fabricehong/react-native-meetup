import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

class CreateScreen extends React.Component {
    render() {
        return (
            <View
                style={styles.container}>
                <View>
                    <Text>Hangout name</Text>
                    <TextInput style={styles.input}/>
                    <Text>Description</Text>
                    <TextInput style={styles.input}
                        multiline = {true}
                        numberOfLines = {4}/>
                </View>
                <Button title="Create"/>
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