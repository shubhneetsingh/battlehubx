import Link from 'next/link';
import { FaTwitter, FaDiscord, FaTwitch, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-light py-12 border-t border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BattleHubX</h3>
            <p className="text-gray-400">
              The premier platform for competitive esports tournaments and gaming communities.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition">Home</Link></li>
              <li><Link href="/tournaments" className="text-gray-400 hover:text-primary transition">Tournaments</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Games</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition">Valorant</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition">League of Legends</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition">CS:GO</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition">Dota 2</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition text-xl">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition text-xl">
                <FaDiscord />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition text-xl">
                <FaTwitch />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition text-xl">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BattleHubX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;