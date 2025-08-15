import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

// Mock tournament data
const mockTournaments = [
  {
    id: '1',
    title: 'Valorant Summer Showdown',
    game: 'Valorant',
    date: '2023-07-15',
    prizePool: 5000,
    registrationFee: 20,
    maxPlayers: 32,
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'CS:GO Community Cup',
    game: 'CS:GO',
    date: '2023-06-28',
    prizePool: 2500,
    registrationFee: 10,
    maxPlayers: 16,
    status: 'ongoing'
  },
  {
    id: '3',
    title: 'League of Legends Tournament',
    game: 'League of Legends',
    date: '2023-05-10',
    prizePool: 3000,
    registrationFee: 15,
    maxPlayers: 8,
    status: 'completed'
  }
];

export default function OrganizerDashboard() {
  const router = useRouter();
  const [tournaments, setTournaments] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('organizerAuth') === 'true';
    if (!isAuthenticated) {
      router.push('/organizer/login');
      return;
    }

    // Load tournaments
    const savedTournaments = JSON.parse(localStorage.getItem('organizerTournaments')) || [];
    setTournaments(savedTournaments.length > 0 ? savedTournaments : mockTournaments);
    
    // Check for success message from create/edit
    if (router.query.success) {
      setSuccessMessage('Tournament saved successfully!');
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  }, [router]);

  const deleteTournament = (id) => {
    if (confirm('Are you sure you want to delete this tournament?')) {
      const updatedTournaments = tournaments.filter(t => t.id !== id);
      setTournaments(updatedTournaments);
      localStorage.setItem('organizerTournaments', JSON.stringify(updatedTournaments));
      setSuccessMessage('Tournament deleted successfully!');
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      upcoming: 'bg-blue-600',
      ongoing: 'bg-green-600',
      completed: 'bg-gray-600'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusClasses[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>Organizer Dashboard | BattleHubX</title>
      </Head>

      <header className="bg-dark-light border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">BattleHubX Organizer</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/organizer/dashboard" className="hover:text-primary">Dashboard</Link></li>
              <li><Link href="/organizer/create" className="hover:text-primary">Create Tournament</Link></li>
              <li>
                <button 
                  onClick={() => {
                    localStorage.removeItem('organizerAuth');
                    router.push('/organizer/login');
                  }}
                  className="hover:text-primary"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Your Tournaments</h2>
          <Link href="/organizer/create" className="btn-primary">
            Create New Tournament
          </Link>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-900 text-green-100 rounded-lg">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-900 text-red-100 rounded-lg">
            {errorMessage}
          </div>
        )}

        {tournaments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">You haven't created any tournaments yet.</p>
            <Link href="/organizer/create" className="btn-primary">
              Create Your First Tournament
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="bg-dark-light rounded-lg border border-gray-800 overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{tournament.title}</h3>
                    {getStatusBadge(tournament.status)}
                  </div>
                  <p className="text-gray-400 mb-4">{tournament.game}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-400">Date</p>
                      <p>{new Date(tournament.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Prize Pool</p>
                      <p>${tournament.prizePool.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Entry Fee</p>
                      <p>${tournament.registrationFee}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Max Players</p>
                      <p>{tournament.maxPlayers}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link 
                      href={`/organizer/${tournament.id}`}
                      className="btn-primary flex-1 text-center"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTournament(tournament.id)}
                      className="btn-danger flex-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}