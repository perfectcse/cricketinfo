import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Players from './pages/Players';
import Blogs from './pages/Blogs';
import About from './pages/About';
import AddPlayer from './pages/AddPlayer';
import AddBlog from './pages/AddBlog';

// ✅ Check if these files exist before importing
import Stadiums from './pages/Stadiums';
import AddStadium from './pages/AddStadium';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-player" element={<AddPlayer />} />
            <Route path="/add-blog" element={<AddBlog />} />
            <Route path="/stadiums" element={<Stadiums />} />
            <Route path="/add-stadium" element={<AddStadium />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
