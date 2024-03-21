import 'react-native';
import React from 'react';
import App from '../App';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

describe('App', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
    expect(tree.children?.length).toBe(1);
  });
});
