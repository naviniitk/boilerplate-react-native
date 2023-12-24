import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Brand from './brand';
import { CatContextProvider } from 'boilerplate-react-native/src/contexts';

test('App renders correctly', () => {
  const component = (
    <CatContextProvider>
      <Brand />
    </CatContextProvider>
  );

  render(component);

  const wrapper = screen.getByTestId('brand-img-wrapper');

  expect(wrapper.props.style).toHaveProperty('width', 400);
  expect(wrapper.props.style).toHaveProperty('height', 400);
});
