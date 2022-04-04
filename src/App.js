import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
