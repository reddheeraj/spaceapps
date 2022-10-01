import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/spaceapps" element={<Home />} />
          <Route path="option1" element={<Home />} />
          <Route path="option2" element={<Home />} />
          <Route path="spaceapps/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
