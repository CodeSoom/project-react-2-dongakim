import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HabitFormContainer from './HabitFormContainer';

describe('<HabitFormContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      habitFields: {
        anchor: '',
        tinyBehavior: '',
        celebration: '',
      },
    }));
  });

  function renderHabitFormContainer() {
    return render((
      <HabitFormContainer />
    ));
  }

  it('renders anchor, tiny behavior, celebration fields', () => {
    const { getByLabelText } = renderHabitFormContainer();

    expect(getByLabelText('앵커')).toBeInTheDocument();
    expect(getByLabelText('작은 행동')).toBeInTheDocument();
    expect(getByLabelText('축하')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByText } = renderHabitFormContainer();

    expect(getByText('습관 등록하기')).toBeInTheDocument();
  });

  it('litens habit field change events', () => {
    const { getByLabelText } = renderHabitFormContainer();

    const controls = [
      { label: '앵커', name: 'anchor', value: '아침에 일어나면' },
      { label: '작은 행동', name: 'tinyBehavior', value: '침구를 정리한다' },
      { label: '축하', name: 'celebration', value: '뿌듯한 마음으로 박수 2번을 친다' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(dispatch).toBeCalledWith({
        type: 'tinyHabits/changeHabitFields',
        payload: { name, value },
      });
    });
  });
});
