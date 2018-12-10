import React, {PureComponent} from 'react';
import {string, number} from 'prop-types';
import {Button, Text, TextInput, View} from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

const DEFAULT_STATE = {text: '', focus: 0};

export default class PlayerSelectionPageView extends PureComponent {

  static propTypes = {
    text: string,
    focus: number
  };

  constructor(props) {
    super(props);
    this.state = {...DEFAULT_STATE};
  }

  // Add a player to the player's list
  addPlayer = () => {

    // retrieve the player's name
    let name = this.state.text.trim();

    // check if there's nobody with the same name
    if (name && !this.props.players.includes(name)) {
      this.props.addPlayer(name);
    }

    // reset the main input text
    this.setState({text: ''});
  };

  startGame = () => {
    return this.props.navigation.navigate('gamePage');
  };

  removePlayer(id) {
    this.props.removePlayer(id);
  }

  setPlayerName(name, id) {
    this.props.setPlayerName(name, id);
  }

  hasEnoughPlayers() {
    return this.props.players.length > 1
  }

  render() {
    const {toutSurUneligne, nomPlayer, bouton, input} = styles;
    return (<View>
        <Text>Enter your players !</Text>
        <TextInput
          autoFocus={this.state === 0}
          style={input}
          onChangeText={(text) => this.setState({text})}
          placeholder={'Enter a player name'}
          value={this.state.text}
          autoCorrect={false}
        />
        <Button title="add" onPress={this.addPlayer}/>
        {
          this.props.players.map(
          (ele, i) => (
            <View key={i} style={toutSurUneligne}>
              <TextInput
                autoFocus={i === this.state.focus}
                onFocus={() => this.setState({focus: i})}
                autoCorrect={false}
                onChangeText={(text) => {
                  this.setPlayerName(text, i);
                }}
                value={ele.name}
                key={ele.name + i + '_2'} style={nomPlayer}/>
              <Button key={ele.name + i + '_1'} style={bouton} title="X"
                      onPress={() => this.removePlayer(i)}/>
            </View>
          ))
        }
        <PrimaryButton disabled={!this.hasEnoughPlayers()} label="Start" onPress={this.startGame}/>
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



