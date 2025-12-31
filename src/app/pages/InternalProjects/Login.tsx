
import {useState} from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_BASE = "http://localhost:5050";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      // 1️⃣ Login
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // HTTP-only cookie
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Login failed");

      // 2️⃣ Verify token immediately
      const verifyRes = await fetch(`${API_BASE}/api/auth/profile`, {
        credentials: "include",
      });

      if (!verifyRes.ok) {
        throw new Error("Token verification failed");
      }

      // 3️⃣ Redirect on success
      navigate("/profile");
    } catch (error: any) {
      setErr(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="w-full max-w-md bg-[#1E293B] border border-white/10 rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Sign in to your account
        </h2>

        {err && (
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 text-sm">
            {err}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="username"
              className="w-full rounded-lg bg-[#020617] text-gray-200
                         border border-white/10 px-4 py-2
                         placeholder:text-gray-500
                         focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              required
              autoComplete="current-password"
              className="w-full rounded-lg bg-[#020617] text-gray-200
                         border border-white/10 px-4 py-2
                         placeholder:text-gray-500
                         focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg
                       bg-gradient-to-r from-cyan-400 to-indigo-500
                       text-[#0F172A] font-semibold
                       hover:opacity-90 transition
                       disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/services/in-house-projects/dashboard/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
