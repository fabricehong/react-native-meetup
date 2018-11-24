import React from 'react';
import renderer from 'react-test-renderer';
import GameScorePageView from './GameScorePageView';

describe('GameScorePageView', () => {
  test('should renders correctly', () => {
    const tree = renderer.create(<GameScorePageView/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});