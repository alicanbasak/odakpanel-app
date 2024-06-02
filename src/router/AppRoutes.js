import { Navigate, Route, Routes } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import Dashboard from "../containers/Dashboard/Dashboard";
import NotAuth from "../containers/Errors/NotAuth";
import { SignIn } from "../containers/Auth";

function AppRoutes() {
  //https://github.com/react-auth-kit/react-auth-kit/issues/1023
  const PrivateRoute = ({ Component }) => {
    const isAuthenticated = useIsAuthenticated();
    const auth = isAuthenticated();
    return auth ? <Component /> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute Component={Dashboard} />}></Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/not-auth" element={<NotAuth />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
