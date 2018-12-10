import React, {PureComponent} from 'react';
import {number, string} from 'prop-types';
import {
  Button,
  Container,
  Content,
  Footer,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Left,
  List,
  ListItem,
  Right,
} from 'native-base';

const DEFAULT_STATE = {text: '', focus: 0};

export default class PlayerSelectionPageView extends PureComponent {

  static propTypes = {
    text: string, focus: number,
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
    return this.props.players.length > 1;
  }

  renderList() {
    return (
      <List>
        {this.props.players.map((ele, index) =>
          <ListItem key={index}>
            <Left>
              <Input placeholder={'Player ' + index}
                     onChangeText={(text) => {
                       this.setPlayerName(text, index);
                     }}
                     autoFocus={index === this.state.focus}
                     onFocus={() => this.setState({focus: index})}
                     autoCorrect={false}
                     value={ele.name}
                     key={ele.name + index}
              />
            </Left>
            <Right>
              <Button iconLeft transparent danger
                      onPress={() => this.removePlayer(index)}>
                <Icon name='trash'/>
              </Button>
            </Right>
          </ListItem>
        )}
      </List>
    );
  }

  renderStartButton() {
    if (this.hasEnoughPlayers()) {
      return (<Button iconLeft success full onPress={this.startGame}>
        <Icon name={'play'}/>
      </Button>);
    } else {
      return (<Button iconLeft disabled full onPress={this.startGame}>
        <Icon name={'play'}/>
      </Button>);
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Enter a player name</Label>
              <Input
                autoFocus={this.state === 0}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                autoCorrect={false}
              />
            </Item>
            <Button iconLeft full primary onPress={this.addPlayer}>
              <Icon name={'add'}/>
            </Button>
          </Form>
          {this.renderList()}
        </Content>
        <Footer>
          <Content>
            {this.renderStartButton()}
          </Content>
        </Footer>
      </Container>
    );
  }
}



