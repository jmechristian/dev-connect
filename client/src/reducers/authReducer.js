import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenicated: false,
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenicated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
