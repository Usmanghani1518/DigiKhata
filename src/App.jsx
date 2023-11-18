import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from './components/Home/home.jsx';
import About from './components/About-Us/About.jsx';
import Blog from './components/blogs/Blog.jsx';
import Feature from './components/features/Feature.jsx';
import Contact from './components/Contact-Us/Contact.jsx';
import Career from './components/Career/Career.jsx';
import { BlogProvider } from './components/blogs/BlogContext.jsx';
import Blogdetail from './components/blogs/Blogdetail.jsx';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <BlogProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail" element={<Blogdetail />} />
          </Routes>
          <Footer />
        </BlogProvider>
      </Router>
    </>
  );
}

export default App;
