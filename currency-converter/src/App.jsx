import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './utils/Header';
import Footer from './utils/Footer';
import Converter from './components/Converter';
import MultiCurrency from './components/MultiCurrency';
import Favorites from './components/Favorites';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
        <Header />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Converter />} />
            <Route path="/multi-converter" element={<MultiCurrency />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
