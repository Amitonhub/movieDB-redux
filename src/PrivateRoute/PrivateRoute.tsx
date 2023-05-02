import { Navigate, Route } from "react-router-dom";
import { localIsLoggedIn } from "../LocalStorageUtils/LocalStorageUtils";

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

interface PrivateRouteProps extends RouteProps {
  element: React.ReactElement;
}

const PrivateRoute = ({ element, ...rest }: PrivateRouteProps) => {
  const isLoggedIn = localIsLoggedIn;
  
  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
