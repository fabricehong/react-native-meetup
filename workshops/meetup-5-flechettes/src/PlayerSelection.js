import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import PrimaryButton from './PrimaryButton';

export default class PlayerSelection extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Player 1', players: ['player'] };
    }

    editPlayer = (text) => {
        let players = [ ...this.state.markers ];
        markers[index] = {...markers[index], key: value};
        this.setState({ markers });
    }

    addPlayer = () => {
        let input = this.state.text.trim();
        if (input && !this.state.players.includes(input)) {
            this.setState({ players :  [...this.state.players, input], text: ''});
        }
    }

    removePlayer = (player) => {
        this.setState((prevState) => ({ players: prevState.players.filter((ele) => ele !== player) }));
    }

    startGame = () => {

    }

    render() {
        return (
            <View>
                <Text>Enter your players !</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Button title="add" onPress={this.addPlayer}/>  
                {this.state.players.map((ele) => 
                    <View>
                        <Text key={ele}>Joueur : {ele}</Text>
                        <Button title="Delete" onPress={() => this.removePlayer(ele)}/>
                    </View> 
                )}
                <PrimaryButton label="Start" onPress={this.startGame}/>
            </View>
        )
    }
}
