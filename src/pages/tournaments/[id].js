import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import tournaments from '../../data/tournaments';

export default function TournamentDetails() {
  const router = useRouter();
  const { id } = router.query;
  const tournament = tournaments.find(t => t.id === id);

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark to-dark-light">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Tournament Not Found</h1>
          <Link
            href="/tournaments"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Browse Tournaments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{tournament.title} | BattleHubX</title>
        <meta name="description" content={`Details for ${tournament.title} tournament`} />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-dark to-dark-light pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-2/3">
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                  <img
                    src={tournament.image}
                    alt={tournament.game}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 px-4 py-2 rounded-full text-sm font-medium">
                    Prize Pool: ${tournament.prizePool.toLocaleString()}
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">{tournament.title}</h1>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tournament.game}
                  </span>
                  <span className="text-gray-400">{tournament.date}</span>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-6">
                    Join this exciting tournament and compete against the best players in the community. 
                    The competition will be fierce, but the rewards are worth it!
                  </p>

                  <h3 className="text-xl font-bold mb-3">Tournament Details</h3>
                  <ul className="space-y-2 mb-8">
                    <li><strong>Format:</strong> Single Elimination</li>
                    <li><strong>Registration Fee:</strong> ${tournament.registrationFee || 'Free'}</li>
                    <li><strong>Max Participants:</strong> {tournament.maxParticipants || tournament.participants}</li>
                    <li><strong>Start Time:</strong> 12:00 PM UTC</li>
                    <li><strong>Rules:</strong> Standard competitive rules apply</li>
                  </ul>

                  <h3 className="text-xl font-bold mb-3">Prize Distribution</h3>
                  <div className="bg-dark-light rounded-lg p-4 mb-8">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-primary">1st</div>
                        <div>${Math.floor(tournament.prizePool * 0.6).toLocaleString()}</div>
                      </div>
                      <div className="bg-primary/5 p-3 rounded-lg">
                        <div className="text-2xl font-bold">2nd</div>
                        <div>${Math.floor(tournament.prizePool * 0.3).toLocaleString()}</div>
                      </div>
                      <div className="bg-primary/5 p-3 rounded-lg">
                        <div className="text-2xl font-bold">3rd</div>
                        <div>${Math.floor(tournament.prizePool * 0.1).toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-dark-light border border-gray-800 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Register Now</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Fee</span>
                      <span className="font-medium">
                        {tournament.registrationFee ? `$${tournament.registrationFee}` : 'Free'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Participants</span>
                      <span className="font-medium">{tournament.participants} / {tournament.maxParticipants || '∞'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Starts In</span>
                      <span className="font-medium">3 days</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition mt-6">
                      Register Now
                    </button>

                    <div className="text-center text-sm text-gray-400 mt-4">
                      Must be logged in to register
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/tournaments"
              className="inline-flex items-center text-primary hover:underline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Tournaments
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}