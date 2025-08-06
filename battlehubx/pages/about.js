import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | BattleHubX</title>
        <meta name="description" content="Learn about BattleHubX" />
      </Head>
      
      <Navbar />
      
      <main className="section">
        <div className="container">
          <h1 className="section-title">About <span className="text-primary">BattleHubX</span></h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At BattleHubX, we're dedicated to creating the ultimate platform for competitive gamers to showcase their skills, connect with like-minded players, and compete in high-stakes tournaments.
              </p>
              <p className="text-gray-300">
                Founded in 2022, our platform has grown to host thousands of tournaments across multiple games, with millions in prize money awarded to talented players worldwide.
              </p>
            </div>
            <div className="bg-dark-light p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Why Choose BattleHubX?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Fair and competitive tournaments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Guaranteed prize payouts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Professional tournament organization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Dedicated anti-cheat measures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Vibrant gaming community</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-dark-light p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Alex Johnson", role: "CEO & Founder", bio: "Former professional esports player with 10+ years in the industry." },
                { name: "Sarah Chen", role: "Tournament Director", bio: "Organized 100+ esports events with major brands." },
                { name: "Marcus Lee", role: "Community Manager", bio: "Passionate about building inclusive gaming communities." }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );

}
