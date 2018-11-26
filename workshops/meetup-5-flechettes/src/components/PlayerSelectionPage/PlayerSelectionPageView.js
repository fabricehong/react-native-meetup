import React, {PureComponent} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

export default class PlayerSelectionPageView extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  addPlayer = () => {
    let input = this.state.text.trim();
    if (input && !this.props.players.includes(input)) {
      this.props.addPlayer(input);
    }
    this.setState({text: ''});
  };

  startGame = () => {
    this.props.navigation.navigate('gamePage');
  };

  removePlayer(id) {
    this.props.removePlayer(id);
  }

  render() {
    const {players} = this.props;
    console.log(players);
    const {toutSurUneligne, nomPlayer, lesBoutons, bouton, input} = styles;
    return (
      <View>
      <Text>Enter your players !</Text>
      <TextInput
        style={input}
        onChangeText={(text) => this.setState({text})}
        placeholder={'Enter a player name'}
        value={this.state.text}
      />
      <Button title="add" onPress={this.addPlayer}/>
      {
        players.map((ele, i) => (
          <View key={i} style={toutSurUneligne}>
            <Text key={ele.name + i +  '_2'} style={nomPlayer}>Joueur : {ele.name}</Text>
            <View key={ele.name + i + '_3'} style={lesBoutons}>
              <Button key={ele.name + i +  '_1'} style={bouton} title="X"
                      onPress={() => this.removePlayer(i)}/>
              <Button key={ele.name + i + '_4'} style={bouton} title="O"
                      onPress={() => this.removePlayer(i)}/>
            </View>
          </View>
        ))
      }

      <PrimaryButton label="Start" onPress={this.startGame}/>
    </View>);
  }
}

const styles = {
  toutSurUneligne: {
    flexDirection: 'row', borderBottomWidth: 3, borderColor: '#d6d7da',
  }, nomPlayer: {
    flex: 2,
  }, lesBoutons: {
    flex: 1, flexDirection: 'row',
  }, bouton: {
    width: 20, paddingHorizontal: 25, // ne fonctionne pas.
  }, input: {
    height: 40, borderColor: 'gray', borderWidth: 1,
  },
};



