import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import FAQs from './pages/FAQs/FAQs';
import Reviews from './pages/Reviews/Reviews';
import Blog from './pages/Blog/Blog';
import './App.css';

function updateMetaTags() {
  document.title = 'Prompt Recovery Ltd | Rapid Response, Prompt Recovery';

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content =
    'ROADSIDE RECOVERY YOU CAN RELY ON. SERVING WATFORD & SOURROUNDING AREAS. Fast, friendly and affordable help for vehicles under 4 tonnes.';

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = 'recovery service, roadside assistance, Watford, vehicle recovery, prompt recovery';
}

function App() {
  React.useEffect(() => {
    updateMetaTags();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
