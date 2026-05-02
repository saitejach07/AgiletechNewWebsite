import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL;

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/auth/profile`, {
          credentials: "include",
        });

        if (res.status === 401 || res.status === 403) {
          navigate("/services/in-house-projects/login");
          return;
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
        navigate("/services/in-house-projects/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const logout = async () => {
    await fetch(`${API_BASE}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    navigate("/services/in-house-projects/providerenrollment");
  };

  // ✅ Fix DOB formatting
  const formatDate = (date: string) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="text-center text-white mt-20 text-lg">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#0B1220] to-[#020617] text-white px-6 py-10">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome,{" "}
            <span className="text-cyan-400">
              {user.first_name} {user.last_name}
            </span>
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Manage your provider profile details
          </p>
        </div>

        <button
          onClick={logout}
          className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition shadow-lg"
        >
          Logout
        </button>
      </div>

      {/* PROFILE CARD */}
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8">

        <h2 className="text-xl font-semibold text-cyan-400 mb-6">
          Profile Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-lg font-medium">{user.email}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Gender</p>
              <p className="text-lg">{user.gender || "—"}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Profession</p>
              <p className="text-lg">{user.profession || "—"}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">License Number</p>
              <p className="text-lg">{user.license_number || "—"}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-lg">{user.phone || "—"}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Date of Birth</p>
              <p className="text-lg">{formatDate(user.dob)}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">NPI</p>
              <p className="text-lg">{user.npi || "—"}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Issuing Authority</p>
              <p className="text-lg">{user.issuing_authority || "—"}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}