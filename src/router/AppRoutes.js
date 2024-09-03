import { Navigate, Route, Routes } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import Dashboard from "../containers/Dashboard/Dashboard";
import NotAuth from "../containers/Errors/NotAuth";
import { SignIn } from "../containers/Auth";
import Rfq from "../containers/Rfq/Rfq";
import Invoices from "../containers/Invoices/Invoices";
import Customers from "../containers/Customers/Customers";
import Members from "../containers/Members/Members";
import Factories from "../containers/Factories/Factories";
import RfqDetail from "../containers/Rfq/RfqDetail";

function AppRoutes() {
  const PrivateRoute = ({ Component }) => {
    const isAuthenticated = useIsAuthenticated();
    const auth = isAuthenticated();
    return auth ? <Component /> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute Component={Dashboard} />}></Route>
      <Route path="/rfqs" element={<PrivateRoute Component={Rfq} />}></Route>
      <Route
        path="/rfqs/:id"
        element={<PrivateRoute Component={RfqDetail} />}
      ></Route>
      <Route
        path="/invoices"
        element={<PrivateRoute Component={Invoices} />}
      ></Route>
      <Route path="/login" element={<SignIn />} />
      <Route
        path="/customers"
        element={<PrivateRoute Component={Customers} />}
      />
      <Route path="/members" element={<PrivateRoute Component={Members} />} />
      <Route
        path="/factories"
        element={<PrivateRoute Component={Factories} />}
      />
      <Route path="/not-auth" element={<NotAuth />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
