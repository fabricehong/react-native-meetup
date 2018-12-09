import React, { Component } from 'react';
import { Text, View, TextInput, Button, Dimensions } from 'react-native';
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
    }

