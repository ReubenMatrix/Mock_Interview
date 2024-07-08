// pages/Home.js or App.js
import React from 'react';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingPage />
      <Footer />
    </div>
  );
}
