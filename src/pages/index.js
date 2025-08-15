import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import tournaments from '../data/tournaments';

export default function Home() {
  const featuredTournaments = tournaments.slice(0, 3);

  return (
    <>
      <Head>
        <title>BattleHubX | Premium Esports Tournaments</title>
        <meta name="description" content="Compete in premium esports tournaments and win big prizes" />
      </Head>

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 to-dark z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Compete. Win.
              </span>{' '}
              <br />Dominate the Arena
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Join the ultimate platform for competitive gaming tournaments with massive prize pools and professional organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/tournaments"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-bold hover:opacity-90 transition"
              >
                Browse Tournaments
              </Link>
              <Link
                href="/signup"
                className="px-8 py-4 border border-gray-700 rounded-lg text-white font-bold hover:bg-dark-light transition"
              >
                Join Now
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Tournaments */}
        <section className="py-20 bg-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="text-primary">Tournaments</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Check out our most exciting upcoming competitions with massive prize pools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTournaments.map((tournament) => (
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

            <div className="text-center mt-12">
              <Link
                href="/tournaments"
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-bold hover:opacity-90 transition"
              >
                View All Tournaments
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-dark to-dark-light">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-primary">Compete</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Create your free account today and start joining tournaments to showcase your skills and win prizes.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-bold hover:opacity-90 transition"
              >
                Sign Up Now - It's Free
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}