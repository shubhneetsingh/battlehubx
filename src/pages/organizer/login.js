import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function OrganizerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock authentication
    setTimeout(() => {
      if (email === 'organizer@battlehubx.com' && password === 'password123') {
        localStorage.setItem('organizerAuth', 'true');
        router.push('/organizer/dashboard');
      } else {
        setError('Invalid credentials');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-light">
      <Head>
        <title>Organizer Login | BattleHubX</title>
      </Head>

      <div className="w-full max-w-md p-8 bg-dark rounded-lg border border-gray-800 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Organizer Portal</h1>
          <p className="text-gray-400">Sign in to manage your tournaments</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-900 text-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}