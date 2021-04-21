import reducer from './reducer';

describe('reducer', () => {
    test('on fetch start', () => {
      const action = { type: 'FETCH_INIT'};
      const state = {  
        books: [],
        error: null,
        loading: false 
      };
  
      const newState = reducer(state, action);
  
      const expectedState = {
        books: [],
        error: null,
        loading: true
      };
  
      expect(newState).toStrictEqual(expectedState);
    });0
  });