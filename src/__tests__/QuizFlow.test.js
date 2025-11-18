import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import scoreController from '../controllers/scoreController';

beforeEach(() => {
  scoreController.reset();
});

beforeAll(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

test('user can take quiz and see results', async () => {
  render(<App />);
  // Select answers and submit wrapped in act
  const q1 = screen.getByLabelText('Hartford');
  const q2 = screen.getByLabelText('8');
  const done = screen.getByText('Done');

  await act(async () => {
    await userEvent.click(q1);
    await userEvent.click(q2);
    await userEvent.click(done);
  });

  // Now we should be on Results page showing 1/2
  const resultText = await screen.findByText(/Score:/i);
  expect(resultText).toHaveTextContent('Score: 1 / 2');
});
