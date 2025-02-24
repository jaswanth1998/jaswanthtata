import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Family from "./components/Family";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import PromptEngineering from './components/PromptEngineering';

import ScrollToTop from "./Helpers/ScrollToTop";
import ChatWidget from "./components/ChatWidget";


function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />

        <section id="projects">
          <Gallery />
        </section>
        <Achievements />
        <PromptEngineering />
        {/* <Family /> */}
        {/* <Testimonials /> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}



function App() {
  return (
    <Router>
      <ChatWidget />
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
