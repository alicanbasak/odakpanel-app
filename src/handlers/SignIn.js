// handlers.js

import { useSignIn } from "react-auth-kit";
import { loginUser } from "../Api/SignIn";

export const useHandleSubmit = () => {
  const signIn = useSignIn();

  return async (values, navigate) => {
    try {
      const response = await loginUser(values);
      console.log(response);
      if (
        signIn({
          token: response.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: {
            id: response.user.Id,
            username: values.Username,
            role: response.user.RoleId,
            email: response.user.Email,
            salesPersonCode: response.user.SatisElemaniKodu,
            adminId: response.user.YoneticiId,
          },
        })
      ) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
};
