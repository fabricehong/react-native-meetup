import React from 'react';
import PrimaryButton from './PrimaryButton';
import renderer from 'react-test-renderer';

describe('PrimaryButton', () => {
  test('should renders correctly', () => {
    const tree = renderer.create(<PrimaryButton/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});