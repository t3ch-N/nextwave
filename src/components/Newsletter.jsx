import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('subscribing');
    
    try {
      const response = await fetch('/.netlify/functions/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
        <p className="text-lg mb-8">Get the latest PR insights and news delivered to your inbox</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-full text-gray-900"
            required
          />
          <button
            type="submit"
            disabled={status === 'subscribing'}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition disabled:opacity-50"
          >
            {status === 'subscribing' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-green-200">Thanks for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-200">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
