import React from 'react';

import { render } from '@testing-library/react';

import HabitForm from './HabitForm';

describe('<HabitForm />', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderHabitForm() {
    const fields = {
      anchor: '',
      tinyBehavior: '',
      celebration: '',
    };

    return render((
      <HabitForm
        fields={fields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders anchor, tiny behavior, celebration fields', () => {
    const { getByLabelText } = renderHabitForm();

    expect(getByLabelText('앵커')).toBeInTheDocument();
    expect(getByLabelText('작은 행동')).toBeInTheDocument();
    expect(getByLabelText('축하')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByText } = renderHabitForm();

    expect(getByText('습관 등록하기')).toBeInTheDocument();
  });
});
