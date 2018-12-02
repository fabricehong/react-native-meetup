import React, { Component } from 'react';
import { Text, View, TextInput, Button, Dimensions,StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';

const { Twidth, Theight } = Dimensions.get('window');

export default class PlayerSelection extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', players: [] };
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

    }

    render() {
    
        return (
            <View>
                

                {this.state.players.map((ele) => 
                    <View key={ele} style={styles.toutSurUneligne} >
                        <Text key={ele+'_2'} style={styles.nomPlayer}>{ele}</Text>
                        <View key={ele+'_3'} style={styles.lesBoutons}>
				            <Button key={ele+'_1'} style={styles.bouton} title="X" onPress={() => this.removePlayer(ele)}/>
			            </View>  
                    </View> 
                )}
           <View  style={styles.toutSurUneligne} >
                 
                 <TextInput
                     style={styles.inputNomPlayer}
                     onChangeText={(text) => this.setState({ text })}
                     placeholder='Nom du jouer'
                     value={this.state.text}
                 />

                 <View  style={styles.lesBoutons}>
                     <Button title="+"  onPress={this.addPlayer}/> 
                 </View>
             </View>
             <View  style={styles.toutSurUneligne} >
                <PrimaryButton label="Start" onPress={this.startGame}/>
            </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
	toutSurUneligne: {
		flexDirection: 'row',
		borderBottomWidth: 3,
		borderColor: '#d6d7da',
	},
	nomPlayer: {
        flex: .7,
        fontSize: 20,
        fontWeight: 'bold',
	},
	lesBoutons: {
		flex: .3,
		flexDirection: 'row',
    },
    inputNomPlayer: {
        flex: .7,
        fontSize: 20,
	},
	bouton: {
		width : 20,
			
	},
});



