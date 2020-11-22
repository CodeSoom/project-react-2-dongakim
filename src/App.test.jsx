import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('<App />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      habitFields: {
        anchor: '',
        tinyBehavior: '',
        celebration: '',
      },
    }));
  });

  it('renders title', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('습관의 디테일')).toBeInTheDocument();
  });
});
