import './App.css';
import About from './Components/about.js';
import Home from './Components/home.js';
import Navbar from './Components/Navbar.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login /> } />
          <Route path="/signup" element={<Signup /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App;
