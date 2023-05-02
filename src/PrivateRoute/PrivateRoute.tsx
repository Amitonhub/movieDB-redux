import { Navigate, Route } from "react-router-dom";

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

interface PrivateRouteProps extends RouteProps {
  element: React.ReactElement;
}

const PrivateRoute = ({ element, ...rest }: PrivateRouteProps) => {
  const isLoggedIn = localStorage.getItem("signedIn");
  
  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
