import reducer, {
  changeHabitFields,
} from './slice';

describe('reducer', () => {
  describe('changeHabitFields', () => {
    context('when anchor is changed', () => {
      it('changes the anchor field', () => {
        const initialState = {
          habitFields: {
            anchor: '',
            tinyBehavior: '',
            celebration: '',
          },
        };

        const state = reducer(
          initialState,
          changeHabitFields({ name: 'anchor', value: '아침에 일어난 후' }),
        );

        expect(state.habitFields.anchor).toBe('아침에 일어난 후');
        expect(state.habitFields.tinyBehavior).toBe('');
        expect(state.habitFields.celebration).toBe('');
      });
    });

    context('when tiny behavior is changed', () => {
      it('changes the tinyBehavior field', () => {
        const initialState = {
          habitFields: {
            anchor: '',
            tinyBehavior: '',
            celebration: '',
          },
        };

        const state = reducer(
          initialState,
          changeHabitFields({ name: 'tinyBehavior', value: '침구 정리를 한다' }),
        );

        expect(state.habitFields.anchor).toBe('');
        expect(state.habitFields.tinyBehavior).toBe('침구 정리를 한다');
        expect(state.habitFields.celebration).toBe('');
      });
    });

    context('when clelebration is changed', () => {
      it('changes the celebration field', () => {
        const initialState = {
          habitFields: {
            anchor: '',
            tinyBehavior: '',
            celebration: '',
          },
        };

        const state = reducer(
          initialState,
          changeHabitFields({ name: 'celebration', value: '뿌듯한 마음으로 박수 두번을 친다' }),
        );

        expect(state.habitFields.anchor).toBe('');
        expect(state.habitFields.tinyBehavior).toBe('');
        expect(state.habitFields.celebration).toBe('뿌듯한 마음으로 박수 두번을 친다');
      });
    });
  });
});
