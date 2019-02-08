import authReducer from '../../reducers/authReducer';

const initialState = {
  isUserAuthenticated: false,
  isAdminAuthenticated: false,
};


describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
});
