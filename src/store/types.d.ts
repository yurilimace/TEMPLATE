import { AuthState } from "./modules/auth/types";
import { SidebarState } from "./modules/sidebar/types";

export interface AppState {
  auth: AuthState;
  sidebar: SidebarState;
}
