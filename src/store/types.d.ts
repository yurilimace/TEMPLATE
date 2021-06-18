import { Dispatch } from "react";
import { Store } from "redux";
import { AuthActionProps, AuthState } from "./modules/auth/types";
import { SidebarActionProps, SidebarState } from "./modules/sidebar/types";

export interface AppState {
  auth: AuthState;
  sidebar: SidebarState;
}

export type AppStore = Store<AuthState, AuthActionProps> &
  Store<SidebarState, SidebarActionProps> & { dispatch: Dispatch };
