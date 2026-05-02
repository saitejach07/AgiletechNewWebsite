import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL;

export function ProtectedRouteBackend({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/auth/profile`, {
          credentials: "include",
        });

        setIsAuth(res.ok);
      } catch {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

 if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white">
      Checking authentication...
    </div>
  );
}

  return isAuth
    ? children
    : <Navigate to="/services/in-house-projects/providerenrollment/login" replace />;
}