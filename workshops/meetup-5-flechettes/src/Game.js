import React from 'react';
import { Text, View, Alert, StyleSheet, TouchableHighlight } from 'react-native';
import ScoreButton from './ScoreButton';

export default class Game extends React.Component {

    render() {
        const rows = [];
        for (let i = 0; i < 4; i++) {
            const line = [];
            for (let j = 0; j < 5; j++) {
                line = <ScoreButton>{number}</ScoreButton>;
            }
            rows.push(line);
        }
        return (
            <View>
                {
                    rows.map(row => (
                    <View>
                        {
                            row.map(line => (
                                line
                            ))
                        }
                    </View>
                    ))
                }
                <Text>Hello</Text>
            </View>
        );
    }
}

/*
{
                    Array.from(Array(4).keys()).map(number => <Text>{number}</Text>)
                }
                */

// Array.from(Array(4).keys()).map(number => <ScoreButton text="yes"/>)