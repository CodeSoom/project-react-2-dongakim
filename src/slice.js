import { createSlice } from '@reduxjs/toolkit';

const {
  actions,
  reducer,
} = createSlice({
  name: 'tinyHabits',
  initialState: {
    habitFields: {
      anchor: '',
      tinyBehavior: '',
      celebration: '',
    },
    habits: [],
  },
  reducers: {
    changeHabitFields(state, { payload: { name, value } }) {
      return {
        ...state,
        habitFields: {
          ...state.habitFields,
          [name]: value,
        },
      };
    },
  },
});

export const {
  changeHabitFields,
} = actions;

export default reducer;
