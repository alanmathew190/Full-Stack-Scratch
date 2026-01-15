import React from 'react'
import { Link } from 'react-router';

function Navbar() {
  return (
    <div>
      <nav class="w-full text-white bg-slate-900 px-6 py-4 flex items-center justify-between">
        <div class="text-white text-xl font-bold">MyApp</div>
        <Link to="/create">Create note</Link>
        <Link to="/view">View note</Link>
        <Link to="/edit/">Edit note</Link>
        <Link to="/delete/">Delete note</Link>

        <button class="bg-sky-400 text-slate-900 px-4 py-2 rounded-md font-semibold hover:bg-sky-500 transition">
          Login
        </button>
      </nav>
    </div>
  );
}

export default Navbar