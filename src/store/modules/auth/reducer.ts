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
  switch (type) {
    case actionTypes.LOGIN:
      return { ...state, signed: Boolean(user), user, token };
    default:
      return { ...state, signed: false, user: null, token };
  }
}
