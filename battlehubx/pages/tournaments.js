import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../scomponents/Footer';
import TournamentCard from '../components/TournamentCard';
import tournaments from '../data/tournaments';

export default function Tournaments() {
  return (
    <>
      <Head>
        <title>Tournaments | BattleHubX</title>
        <meta name="description" content="Browse all esports tournaments" />
      </Head>
      
      <Navbar />
      
      <main className="section">
        <div className="container">
          <h1 className="section-title">All <span className="text-primary">Tournaments</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );

}

