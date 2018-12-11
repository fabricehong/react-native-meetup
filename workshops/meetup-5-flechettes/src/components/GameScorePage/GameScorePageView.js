import React, { PureComponent } from 'react';
import { View } from 'react-native';
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
  Body,
  H1
} from 'native-base';

export class GameScorePageView extends PureComponent {
  renderResult() {
    playersList = [
      {
        name: 'Fabrice',
        score: 300
      },
      {
        name: 'Alpha',
        score: 299
      },
      {
        name: 'Arnaud',
        score: 12
      }
    ];

    const labels = playersList.map((player, index) => {
      const text = `${player.name}: ${player.score}`;
      return index === 0 ? <H1 key={index}>{text}</H1> : <Label key={index}>{text}</Label>
    });

    return (
      <View style={{ alignItems: 'flex-end' }}>
        {labels}
      </View>
    )
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          <Body style={{ justifyContent: 'center' }}>
            {this.renderResult()}
          </Body>
        </Content>
      </Container>
    );
  }
}

export default GameScorePageView;