import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | BattleHubX</title>
        <meta name="description" content="Login to your BattleHubX account" />
      </Head>
      
      <Navbar />
      
      <main className="section">
        <div className="container max-w-md">
          <div className="bg-dark-light p-8 rounded-lg border border-gray-800">
            <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
            <p className="text-gray-400 text-center mb-8">Login to your BattleHubX account</p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block mb-2">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="w-4 h-4 text-primary bg-dark border-gray-700 rounded focus:ring-primary"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
                </div>
                <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-primary rounded-lg font-bold hover:bg-primary-dark transition"
              >
                Login
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <a href="#" className="text-primary hover:underline">Sign up</a>
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-center mb-4">Or login with</p>
              <div className="grid grid-cols-2 gap-4">
                {['Twitch', 'Google', 'Discord', 'Steam'].map((provider, index) => (
                  <button 
                    key={index}
                    className="flex items-center justify-center space-x-2 py-2 bg-dark border border-gray-700 rounded-lg hover:bg-gray-800 transition"
                  >
                    <span>{provider}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );

}
