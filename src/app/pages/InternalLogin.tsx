import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function InternalLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      navigate('/services/in-house-projects/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleLogin = () => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('auth', 'true');
      navigate('/services/in-house-projects/dashboard', { replace: true });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="bg-[#1E293B] w-full max-w-md p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl text-white text-center mb-6">
          Internal Access Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-[#0F172A] text-white
                     border border-white/10 focus:border-[#22D3EE]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-[#0F172A] text-white
                     border border-white/10 focus:border-[#22D3EE]"
        />

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg
                     bg-gradient-to-r from-[#22D3EE] to-[#6366F1]
                     text-white font-medium hover:opacity-90 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
