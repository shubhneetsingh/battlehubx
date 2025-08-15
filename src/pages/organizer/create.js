import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link'; // Add this import

export default function CreateTournament() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    game: 'Valorant',
    date: '',
    prizePool: '',
    registrationFee: '',
    maxPlayers: '',
    status: 'upcoming'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('organizerAuth') === 'true';
    if (!isAuthenticated) {
      router.push('/organizer/login');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.prizePool || isNaN(formData.prizePool)) newErrors.prizePool = 'Valid prize pool is required';
    if (!formData.registrationFee || isNaN(formData.registrationFee)) newErrors.registrationFee = 'Valid fee is required';
    if (!formData.maxPlayers || isNaN(formData.maxPlayers)) newErrors.maxPlayers = 'Valid player count is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    
    // Generate ID and save to local storage
    setTimeout(() => {
      const tournaments = JSON.parse(localStorage.getItem('organizerTournaments')) || mockTournaments;
      const newTournament = {
        ...formData,
        id: Date.now().toString(),
        prizePool: Number(formData.prizePool),
        registrationFee: Number(formData.registrationFee),
        maxPlayers: Number(formData.maxPlayers)
      };
      
      const updatedTournaments = [...tournaments, newTournament];
      localStorage.setItem('organizerTournaments', JSON.stringify(updatedTournaments));
      
      router.push('/organizer/dashboard?success=1');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>Create Tournament | BattleHubX</title>
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Create New Tournament</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block mb-2">Tournament Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="input-field"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div>
              <label htmlFor="game" className="block mb-2">Game</label>
              <select
                id="game"
                name="game"
                className="input-field"
                value={formData.game}
                onChange={handleChange}
              >
                <option value="Valorant">Valorant</option>
                <option value="CS:GO">CS:GO</option>
                <option value="League of Legends">League of Legends</option>
                <option value="Dota 2">Dota 2</option>
                <option value="Fortnite">Fortnite</option>
                <option value="Rocket League">Rocket League</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block mb-2">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="input-field"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="prizePool" className="block mb-2">Prize Pool ($)</label>
                <input
                  type="number"
                  id="prizePool"
                  name="prizePool"
                  className="input-field"
                  value={formData.prizePool}
                  onChange={handleChange}
                  min="0"
                />
                {errors.prizePool && <p className="text-red-500 text-sm mt-1">{errors.prizePool}</p>}
              </div>

              <div>
                <label htmlFor="registrationFee" className="block mb-2">Registration Fee ($)</label>
                <input
                  type="number"
                  id="registrationFee"
                  name="registrationFee"
                  className="input-field"
                  value={formData.registrationFee}
                  onChange={handleChange}
                  min="0"
                />
                {errors.registrationFee && <p className="text-red-500 text-sm mt-1">{errors.registrationFee}</p>}
              </div>

              <div>
                <label htmlFor="maxPlayers" className="block mb-2">Max Players</label>
                <input
                  type="number"
                  id="maxPlayers"
                  name="maxPlayers"
                  className="input-field"
                  value={formData.maxPlayers}
                  onChange={handleChange}
                  min="2"
                />
                {errors.maxPlayers && <p className="text-red-500 text-sm mt-1">{errors.maxPlayers}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="status" className="block mb-2">Status</label>
              <select
                id="status"
                name="status"
                className="input-field"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.push('/organizer/dashboard')}
                className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-dark-light transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Tournament'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}