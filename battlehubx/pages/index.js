import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TournamentCard from '../components/TournamentCard';
import Button from '../components/Button';
import tournaments from '../data/tournaments';
import styles from '../styles/Home.module.css';

export default function Home() {
  const featuredTournaments = tournaments.slice(0, 4);
  
  return (
    <>
      <Head>
        <title>BattleHubX | Esports Tournament Platform</title>
        <meta name="description" content="Join competitive esports tournaments and showcase your skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-[80vh]">
          <Image 
            src="/images/banner.jpg" 
            alt="Esports Banner" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
            <div className="container">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Compete. Win. <span className="text-primary">Dominate.</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mb-8">
                Join the ultimate esports tournament platform and compete against the best players worldwide.
              </p>
              <div className="flex space-x-4">
                <Button as={Link} href="/tournaments">
                  Browse Tournaments
                </Button>
                <Button variant="outline" as={Link} href="/about">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Tournaments */}
        <section className="section bg-dark-light">
          <div className="container">
            <h2 className="section-title">Featured <span className="text-primary">Tournaments</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTournaments.map(tournament => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button as={Link} href="/tournaments" variant="secondary">
                View All Tournaments
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="section bg-gradient-to-r from-primary to-secondary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Compete?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Create your account today and start joining tournaments to showcase your skills and win prizes.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}