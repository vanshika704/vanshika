import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyComponent1 from './components/vantanet';
// Import additional components for different routes
import About from './pages/about';
import Skills from './pages/skills';

import Work from './pages/Work';

import Contact from './pages/Contact';
import Education from './pages/education';


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<MyComponent1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
       
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
