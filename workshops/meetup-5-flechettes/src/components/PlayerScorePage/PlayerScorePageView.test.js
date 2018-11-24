import React from 'react';
import renderer from 'react-test-renderer';
import PlayerScorePageView from './PlayerScorePageView';

describe('PlayerScorePageView', () => {
  test('should renders correctly', () => {
    const tree = renderer.create(<PlayerScorePageView/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});