import backend from "src/services/backend";
import User from "src/shared/interfaces/User/types";
import { getFromLocalStorage } from "src/utils/getFromLocalStorage";
import { actionTypes } from "./actionTypes";
import { AuthActionProps, AuthState } from "./types";

const INITIAL_STATE: AuthState = {
  signed: false,
  user: null,
  token: null,
};

export default function auth(
  state = INITIAL_STATE,
  { type, user, token, ...rest }: AuthActionProps
): AuthState {
  const _user = getFromLocalStorage<User>("user");
  const _token = _user ? _user.token : null;

  if (_token) {
    backend.defaults.headers.Authorization = `Bearer ${_token}`;
  }

  switch (type) {
    case actionTypes.LOGIN:
      return { ...state, signed: Boolean(user), user, token };
    case actionTypes.LOGOUT:
      return { ...state, signed: false, user: null, token };
    default:
      return { ...state, signed: Boolean(_user), user: _user, token: _token };
  }
}
