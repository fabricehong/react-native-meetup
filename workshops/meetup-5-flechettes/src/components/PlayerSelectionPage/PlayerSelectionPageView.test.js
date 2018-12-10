import React from 'react';
import renderer from 'react-test-renderer';
import PlayerSelectionPageView from './PlayerSelectionPageView';

const props = {
  players: []
};

describe('PlayerSelectionPageView', () => {

  test('should renders correctly', () => {
    const tree = renderer.create(<PlayerSelectionPageView {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});