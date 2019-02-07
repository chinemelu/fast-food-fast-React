
import { Get } from '../utils/axiosMethods';
import { GET_MENU } from '../actionTypes/index';

export const getMenu = menu => ({
  type: GET_MENU,
  menu
});

export const getMenuRequest = () => async (dispatch) => {
  try {
    const getMenuResponse = await Get('/menu');
    dispatch(getMenu(getMenuResponse.data));
    return getMenuResponse;
  } catch (error) {
    return error.response.data;
  }
};
