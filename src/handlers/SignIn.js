// handlers.js

import { useSignIn } from "react-auth-kit";
import { loginUser } from "../Api/SignIn";
import { useNotification } from "../context/NotificationContext";

export const useHandleSubmit = () => {
  const signIn = useSignIn();
  const { showNotification } = useNotification();

  return async (values, navigate) => {
    try {
      const response = await loginUser(values);
      console.log(response);
      if (
        signIn({
          tokenType: "Bearer",
          expiresIn: 3600,
          token: response.token,
          authState: {
            id: response.user.Id,
            username: response.user.Username,
            role: response.user.RoleId,
            email: response.user.Email,
            salesPersonCode: response.user.SatisElemaniKodu,
            adminId: response.user.YoneticiId,
          },
        })
      ) {
        showNotification("Login successful", "success");
        navigate("/");
      }
    } catch (err) {
      showNotification("Login failed", "error");
    }
  };
};
