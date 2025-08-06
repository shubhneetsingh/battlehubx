import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-dark-light py-4 border-b border-gray-800">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="BattleHubX" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            BattleHubX
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/tournaments" className="hover:text-primary transition">Tournaments</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/login" className="px-4 py-2 rounded hover:bg-dark-light transition">
            Login
          </Link>
          <Link href="/login" className="px-4 py-2 bg-primary rounded hover:bg-primary-dark transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;