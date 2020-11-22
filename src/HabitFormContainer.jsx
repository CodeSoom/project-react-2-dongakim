import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeHabitFields } from './slice';

import HabitForm from './HabitForm';

export default function HabitFormContainer() {
  const dispatch = useDispatch();

  const { habitFields } = useSelector((state) => state);

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(changeHabitFields({ name, value }));
  }

  return (
    <HabitForm
      fields={habitFields}
      onChange={handleChange}
    />
  );
}
