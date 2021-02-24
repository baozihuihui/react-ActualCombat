import { useContext } from "react";
import ReactRouterContext from "./ReactRouterContext";

export function useParams() {
  const match = useContext(ReactRouterContext).match;
  return match ? match.params : {};
}

export function useHistory() {
  return useContext(ReactRouterContext).history;
}

export function useLocation() {
  return useContext(ReactRouterContext).location;
}
