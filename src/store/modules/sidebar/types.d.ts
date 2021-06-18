export interface SidebarState {
  show: boolean | "responsive";
}

export interface SidebarActionProps extends SidebarState {
  type: string;
}
