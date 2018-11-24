import React from 'react';
import renderer from 'react-test-renderer';
import PlayerSelectionPageView from './PlayerSelectionPageView';

describe('PlayerSelectionPageView', () => {
  test('should renders correctly', () => {
    const tree = renderer.create(<PlayerSelectionPageView/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});