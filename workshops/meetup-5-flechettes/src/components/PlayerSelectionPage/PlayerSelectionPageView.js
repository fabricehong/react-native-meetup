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

  removePlayer(player) {
    this.setState((prevState) => ({
      players: prevState.players.filter((ele) => ele !== player),
    }));
  }

  render() {
    const {players} = this.props;
    const {toutSurUneligne, nomPlayer, lesBoutons, bouton, input} = styles;
    return (<View>
      <Text>Enter your players !</Text>
      <TextInput
        style={input}
        onChangeText={(text) => this.setState({text})}
        placeholder={'Enter a player name'}
        value={this.state.text}
      />
      <Button title="add" onPress={this.addPlayer}/>
      {players.map((ele, i) => (<View key={i} style={toutSurUneligne}>
        <Text key={ele + '_2'} style={nomPlayer}>Joueur : {ele}</Text>
        <View key={ele + '_3'} style={lesBoutons}>
          <Button key={ele + '_1'} style={bouton} title="X"
                  onPress={() => this.removePlayer(ele, i)}/>
          <Button key={ele + '_4'} style={bouton} title="O"
                  onPress={() => this.removePlayer(ele)}/>
        </View>
      </View>))}
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



