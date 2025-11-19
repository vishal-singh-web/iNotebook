import './App.css';
import About from './Components/about';
import Home from './Components/home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
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
