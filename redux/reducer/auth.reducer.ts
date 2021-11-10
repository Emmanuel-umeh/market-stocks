import { User } from "../../declarations/types";
import {
  AUTH_ERROR,
  IS_AUTHENTICATED,
  LOGOUT_SUCCESS,
} from "../types/auth.types";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  type: string;
}

interface ClearType {
  type: "CLEAR_TYPE";
}

interface AuthError {
  type: "AUTH_ERROR";
}

interface Logout {
  type: "LOGOUT_SUCCESS";
}
interface Authenticated {
  type: "IS_AUTHENTICATED";
  user: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  type: "",
};

type Action = ClearType | AuthError | Authenticated | Logout;

export default function (state: AuthState = initialState, action: Action) {
  switch (action.type) {
    // dispatch when needed
    case IS_AUTHENTICATED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.user,
      };

    case AUTH_ERROR:
      return {
        isAuthenticated: null,
        isLoading: false,
        user: null,
        profile: null,
        type: action.type,
      };

    case LOGOUT_SUCCESS: {
      return {
        isAuthenticated: null,
        isLoading: false,
        user: null,
        profile: null,
        type: action.type,
      };
    }

    default:
      return state;
  }
}
