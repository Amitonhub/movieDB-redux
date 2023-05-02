import { useSelector } from "react-redux";
import { RootState } from "../Types/types";
import { Navigate, Route, RouteProps as ReactRouterProps } from "react-router-dom";

type PrivateRouteProps = ReactRouterProps & {
  element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const { isSignedIn } = useSelector((state: RootState) => state.logIn);

  return isSignedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
