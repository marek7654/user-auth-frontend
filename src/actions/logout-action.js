import { redirect } from "react-router-dom";
import { removeAuthToken } from "../actions/util";

export const action = () => {
  removeAuthToken();
  return redirect('/');
}
