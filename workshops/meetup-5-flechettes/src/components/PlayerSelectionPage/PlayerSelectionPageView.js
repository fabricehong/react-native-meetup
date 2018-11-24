import React, { Component } from 'react';
import { Text, View, TextInput, Button, Dimensions } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

const { Twidth, Theight } = Dimensions.get('window');

export default class PlayerSelectionPageView extends Component {
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

    removePlayer (player) {
        this.setState((prevState) => ({ players: prevState.players.filter((ele) => ele !== player) }));
    }

    startGame = () => {
      this.props.navigation.navigate('gamePage')
    };

    render() {
    	const {toutSurUneligne, nomPlayer, lesBoutons, bouton } = styles;
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
                    <View key={ele} style={toutSurUneligne} >
                        <Text key={ele+'_2'} style={nomPlayer}>Joueur : {ele}</Text>
                        <View key={ele+'_3'} style={lesBoutons}>
				<Button key={ele+'_1'} style={bouton} title="X" onPress={() => this.removePlayer(ele)}/>
				<Button key={ele+'_4'} style={bouton} title="O" onPress={() => this.removePlayer(ele)}/>
			</View>
                    </View> 
                )}
                <PrimaryButton label="Start" onPress={this.startGame}/>
            </View>
        )
    }
}


const styles = {
	toutSurUneligne: {
		flexDirection: 'row',
		borderBottomWidth: 3,
		borderColor: '#d6d7da',
	},
	nomPlayer: {
		flex: 2,
	},
	lesBoutons: {
		flex: 1,
		flexDirection: 'row',
	},
	bouton: {
		width : 20,
		paddingHorizontal: 25, // ne fonctionne pas.		
	},
};



