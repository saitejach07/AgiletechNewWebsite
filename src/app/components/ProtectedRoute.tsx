import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuth = localStorage.getItem('auth') === 'true';

  if (!isAuth) {
    return (
      <Navigate
        to="/services/in-house-projects/login"
        replace
      />
    );
  }

  return <>{children}</>;
}