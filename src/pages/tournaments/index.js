import Head from 'next/head';
import Link from 'next/link';
import tournaments from '../../data/tournaments';

export default function TournamentsPage() {
  return (
    <>
      <Head>
        <title>Tournaments | BattleHubX</title>
        <meta name="description" content="Browse all esports tournaments" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-dark to-dark-light">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Upcoming Tournaments
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Compete against the best players and win amazing prizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament) => (
              <div 
                key={tournament.id}
                className="bg-dark-light rounded-xl border border-gray-800 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={tournament.image}
                    alt={tournament.game}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm font-medium">
                    ${tournament.prizePool.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold truncate">{tournament.title}</h3>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {tournament.game}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{tournament.date}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {tournament.participants} participants
                    </span>
                    <Link
                      href={`/tournaments/${tournament.id}`}
                      className="text-sm font-medium bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}