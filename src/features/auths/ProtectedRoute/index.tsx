import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../../App/store';
import { RoutesCatalog } from '../../../shared/types';

type ProtectedRouteProps = {
   children: React.ReactElement;
   authRequired?: boolean;
};

export const ProtectedRoute = ({
   authRequired = false,
   children,
}: ProtectedRouteProps) => {
   const location = useLocation();
   const { isAuth } = useSelector((state) => state.user);
   if (isAuth !== authRequired) {
      if (isAuth) {
         const previousPage = { pathname: RoutesCatalog.HOME };
         return <Navigate replace to={previousPage} />;
      }
      return (
         <Navigate
            replace
            to={RoutesCatalog.LOGIN}
            state={{ from: location }}
         />
      );
   }
   return children;
};
