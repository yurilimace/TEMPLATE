import { actionTypes } from "./actionTypes";
import { AuthActionProps, AuthState } from "./types";

const INITIAL_STATE: AuthState = {
  signed: false,
  user: null,
};

export default function auth(
  state = INITIAL_STATE,
  { type, ...rest }: AuthActionProps
): AuthState {
  switch (type) {
    case actionTypes.LOGIN:
      return { ...state, signed: true, user: { name: "Lorem Ipsum" } };
    default:
      return { ...state, signed: false, user: null };
  }
}
