import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('<TextField />', () => {
  const handleChange = jest.fn();

  function renderTextField() {
    return render((
      <TextField
        label="할 일"
        name="text"
        value="hello"
        onChange={handleChange}
      />
    ));
  }

  it('renders label', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText('할 일')).toBeInTheDocument();
  });

  it('renders value', () => {
    const { getByRole } = renderTextField();

    expect(getByRole('textbox')).toHaveValue('hello');
  });

  it('listens change events', () => {
    const { getByRole } = renderTextField();

    fireEvent.change(getByRole('textbox'), {
      target: { value: 'world' },
    });

    expect(handleChange).toBeCalled();
  });
});
