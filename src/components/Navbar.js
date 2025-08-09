import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-dark-light/80 backdrop-blur-md border-b border-gray-800 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BattleHubX
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${router.pathname === '/' ? 'text-primary' : 'text-gray-300 hover:text-white'} transition`}
            >
              Home
            </Link>
            <Link 
              href="/tournaments" 
              className={`${router.pathname === '/tournaments' ? 'text-primary' : 'text-gray-300 hover:text-white'} transition`}
            >
              Tournaments
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-300 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium hover:opacity-90 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}