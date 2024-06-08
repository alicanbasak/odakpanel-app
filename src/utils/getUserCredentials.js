/* eslint-disable react-hooks/rules-of-hooks */
import { useAuthUser } from "react-auth-kit";

//  get user full credentials
export const getUserCredentials = () => {
  const authUser = useAuthUser();
  return authUser();
};

//  get user role
export const getRole = () => {
  const authUser = useAuthUser();
  const role = authUser().role;
  return role;
};
