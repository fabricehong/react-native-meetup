import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes, { shape, string, number } from 'prop-types';
import {
  Container,
  Content,
  Label,
  Body,
  H1
} from 'native-base';

export class GameScorePageView extends PureComponent {

  static propTypes = {
    players: PropTypes.arrayOf(shape({
      name: string,
      score: number
    })).isRequired
  }

  renderResult() {
    const labels = this.props.players.map((player, index) => {
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