export interface AuthState {
  signed: boolean;
  user: object | null;
  token: string | null;
}

export interface AuthActionProps extends AuthState {
  type: string;
}
