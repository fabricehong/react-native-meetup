import React from 'react';
import GamePageView from './GamePageView';
import renderer from 'react-test-renderer';

describe('GamePageView', () => {
  test('should renders correctly', () => {
    const tree = renderer.create(<GamePageView/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});