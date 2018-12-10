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
            const {toutSurUneligne, nomPlayer, lesBoutons,inputNom } = styles;
            return (
                    <View>
                        {this.state.players.map((ele) => 
                        <View key={ele} style={toutSurUneligne} >
                            <Text key={ele+'_2'} style={nomPlayer}>{ele}</Text>
                            <View key={ele+'_3'} style={lesBoutons}>
                                 <Button key={ele+'_1'}  title="X" onPress={() => this.removePlayer(ele)}/>
                            </View>
                        </View> 
                    )}
                    <View  style={toutSurUneligne} >
                        <TextInput
                            style={inputNom}
                            placeholder='Nom jouer'
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <View style={lesBoutons}>
                            <Button title="+"  onPress={this.addPlayer}/>  
                        </View>  
                    </View>
                    
                 
                    <PrimaryButton label="Start" onPress={this.startGame}/>
                </View>
            )
        }
    }
    
    const styles = {
        toutSurUneligne: {
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: '#d6d7da',
        },
        nomPlayer: {
            flex: 10,
            fontWeight: 'bold',
            margin: 4,
        },
        lesBoutons: {
            flex: 1,
            flexDirection: 'row',
        },
       
        inputNom: {
            flex: 10,
            color:'grey',
            margin: 4,
            borderColor: 'gray', 
            borderWidth: 1
        },
    }

