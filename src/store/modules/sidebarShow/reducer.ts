import { SidebarShowActionProps } from "./types";

const INITIAL_STATE = {
  sidebarShow: "responsive",
};

export default function sidebarShow(
  state = INITIAL_STATE,
  { type, ...rest }: SidebarShowActionProps
) {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
}
