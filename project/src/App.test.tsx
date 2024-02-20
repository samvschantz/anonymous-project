import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders', () => {
  const app = render(<App />);
  expect(app.baseElement).toBeTruthy();
});

test.todo("Query client exists");

test.todo("Theme set to dark mode");
