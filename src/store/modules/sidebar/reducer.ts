import { SidebarActionProps, SidebarState } from "./types";

const INITIAL_STATE: SidebarState = {
  show: "responsive",
};

export default function sidebar(
  state = INITIAL_STATE,
  { type, ...rest }: SidebarActionProps
) {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
}
