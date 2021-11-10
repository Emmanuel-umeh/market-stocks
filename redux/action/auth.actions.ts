import {
  USER_LOADED,
  LOGOUT_SUCCESS,
  IS_AUTHENTICATED,
} from "../types/auth.types";

import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";
import { User } from "../../declarations/types";
import { CLEAR_TYPE } from "../types/product.types";

export const clearType = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: CLEAR_TYPE,
  });
};

// logout
export const logout = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
export const updateUser = (user: User) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: USER_LOADED,
    user,
  });
};
export const authenticateUser = (user: User) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: IS_AUTHENTICATED,
    user: user,
  });
};
