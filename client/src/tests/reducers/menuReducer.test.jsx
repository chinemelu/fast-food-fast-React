import * as types from '../../actionTypes';
import menuReducer from '../../reducers/menuReducer';

const initialState = [];

describe('menu reducer', () => {
  it('returns the initial state when there\'s no new action', () => {
    expect(menuReducer(undefined, {})).toEqual(initialState);
  });
  it('returns the correct state when a user gets the menu', () => {
    const action = {
      type: types.GET_MENU,
      menu: [{
        name: 'ogbono',
        price: 200,
        quantity: 2
      }]
    };
    expect(menuReducer(initialState, action)).toEqual([{
      name: 'ogbono',
      price: 200,
      quantity: 2
    }]);
  });
});
