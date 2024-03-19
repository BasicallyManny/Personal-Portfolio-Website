import './App.css'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css' //import bootstrap styles
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from './components/constants/ScrollToTop.jsx';
import PreLoader from './components/constants/Preloader.jsx';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects'
//import Footer from './components/Footer.jsx'
//import Contact from './components/Contact'

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <PreLoader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
  
    </Router>
    
  );
}

export default App
