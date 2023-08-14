import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/menu' exact Component={Menu} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
