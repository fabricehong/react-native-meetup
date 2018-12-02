import React, { Component } from 'react';
import { Text, View, TextInput, Button, Dimensions,StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';

const { Twidth, Theight } = Dimensions.get('window');

export default class PlayerSelection extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', players: [] };
    }



    addPlayer = () => {
        
        let input = this.state.text.trim();
       
        if (input) {
            if(!this.state.players.includes(input)) {
                if(this.state.players.length <=10){
                    this.setState({ players :  [...this.state.players, input], text: ''});
                }else{
                    alert('Erreur: Max 10 joueurs');
                }
            }else{
                alert('Erreur: Le nom du joueur est déjà presente dans la liste.');
            }
        }else{
            alert('Erreur: Le nom du joueur ne peux pas être vide.');
        }
    }

    removePlayer (player) {
        this.setState((prevState) => ({ players: prevState.players.filter((ele) => ele !== player) }));
    }

    startGame = () => {
        if(this.state.players.length >1){
            alert('Start Game');
        }else{
            alert('Erreur: Il faut saisir au moins deux joueur.');
        }
    }

    render() {
    
        return (
            <View style={styles.container}>
                {this.state.players.map((ele) => 
                    <View key={ele} style={styles.toutSurUneligne} >
                        <Text key={ele+'_2'} style={styles.nomPlayer}>{ele}</Text>
                        <View key={ele+'_3'} style={styles.boutonRemove}>
				            <Button key={ele+'_1'}  title="X" onPress={() => this.removePlayer(ele)}/>
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

                 <View  style={styles.boutonAdd}>
                     <Button title="+"  onPress={this.addPlayer}  /> 
                 </View>
                </View>
                <View  style={styles.boutonStart} >
                    <PrimaryButton label="Start" onPress={this.startGame}/>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		
		borderColor: '#d6d7da',
	},

    toutSurUneligne: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#d6d7da',
	},
	nomPlayer: {
        flex: .7,
        fontSize: 20,
        fontWeight: 'bold',
	},
	boutonRemove: {
		flex: .3,
        flexDirection: 'row',
        borderColor: 'red'
    },
    boutonAdd: {
		flex: .3,
		flexDirection: 'row',
    },
    boutonStart: {
	
		alignItems:'flex-end', 
    },
    inputNomPlayer: {
        flex: .7,
        fontSize: 20,
	},
	bouton: {
		width : 20,
			
	},
});



