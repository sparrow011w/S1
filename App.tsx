
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import JoinUs from './pages/JoinUs.tsx';
import Events from './pages/Events.tsx';
import Contact from './pages/Contact.tsx';
import Report from './pages/Report.tsx';
import Methodology from './pages/Methodology.tsx';
import StaffLogin from './pages/StaffLogin.tsx';
import StaffDashboard from './pages/StaffDashboard.tsx';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/report" element={<Report />} />
            <Route path="/staff-login" element={<StaffLogin />} />
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
