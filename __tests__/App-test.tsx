import 'react-native';
import React from 'react';
import App from '../src/App';
import {act, fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

it('renders app correctly', async () => {
  const {queryByTestId} = render(<App />);

  const title = queryByTestId('profileCreationTitle');
  const description = queryByTestId('profileCreationDescription');

  expect(title).toBeDefined();
  expect(title).toHaveTextContent('Profile Creation');
  expect(description).toBeDefined();
  expect(description).toHaveTextContent(
    'Use the form below to submit your portfolio. An email and password are required.',
  );
});

it('check when first name is 1 character input should show error', async () => {
  const {getByTestId, queryByTestId} = render(<App />);
  const input = getByTestId('firstNameInput');
  const button = getByTestId('submitButton');

  expect(input).toBeDefined();
  expect(button).toBeDefined();

  await act(async () => {
    await fireEvent.changeText(input, 'a');
    await fireEvent.press(button);
    const title = queryByTestId('firstNameError');
    expect(title).toHaveTextContent(
      'First name must be between 2 and 30 characters.',
    );
  });
});
