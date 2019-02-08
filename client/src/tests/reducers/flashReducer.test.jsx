import * as types from '../../actionTypes';
import flashReducer from '../../reducers/flashReducer';

const initialState = [];

describe('flash reducer', () => {
  it('returns the initial state when user gets a flash message', () => {
    expect(flashReducer(undefined, {})).toEqual(initialState);
  });
  it('returns the correct state when a flash message is added', () => {
    const action = {
      type: types.CLEAR_FLASH_MESSAGES,
    };
    expect(flashReducer(initialState, action)).toEqual(initialState);
  });
});
