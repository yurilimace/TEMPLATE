import User from "../User/types";

export interface LoginResponse {
  payload: User;
  successfully: boolean;
}
