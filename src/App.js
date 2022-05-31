import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <Router>

      <Routes>
        
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/Competences" exact="true" element={<Knowledges />} />
          <Route path="/Portfolio" exact="true" element={<Portfolio />} />
          <Route path="/Contact" exact="true" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        
      </Routes>


    </Router>




  );
};

export default App;