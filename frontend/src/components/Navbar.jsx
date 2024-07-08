// components/Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-primary">
          Interview Prep
        </Link>
        <nav className="flex items-center space-x-6">
          <div className="flex items-center justify-center flex-1 space-x-6"> 
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link to="/interviews" className="text-muted-foreground hover:text-foreground">
              Interviews
            </Link>
            <Link to="/jobroles" className="text-muted-foreground hover:text-foreground">
              Job Roles
            </Link>
            <Link to="/ask" className="text-muted-foreground hover:text-foreground">
              Ask AI
            </Link>
          </div>
          {user ? (
            <div className="flex items-center">
              <button onClick={handleSignOut} className="ml-4 text-gray-900 bg-blue-600 hover:bg-blue-700  font-bold py-2 px-4 rounded">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/signin" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
