export interface AuthState {
  signed: boolean;
  user: object | null;
}

export interface AuthActionProps extends AuthState {
  type: string;
}
