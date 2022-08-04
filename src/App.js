import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Partners from './components/Partners/Partners';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';
import AppFeatures1 from './components/Features-lg/AppFeatures1';
import AppFeatures2 from './components/AppFeatures2/AppFeatures2';
import Pricing from './components/Pricing/Pricing';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About Us/AboutUs';
import Contact from './components/Contact/Contact';
import {themeContext} from './Context';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color: darkMode? 'yellow': ''
    }}
    >
    <Router>
      <Navbar />
      <Intro />
      <div>
      <Routes>
        <Route path="/about" element={<AboutUs />}>
          
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/" element={
          <>
            <Partners />
            <Features />
            <Reviews />
            <AppFeatures1 />
            <AppFeatures2 />
            <Pricing />
            <Blog />
          </>
        }>   
        </Route>
        <Route path="/contact" element={<Contact />}>
          
        </Route>
      </Routes>
      </div>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
