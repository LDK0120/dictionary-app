import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import MyList from './MyList';

const linkStyle={
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bolder'
}


export default function App() {

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Dictionary App</h1>
        <div className="navbar-links">
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/mylist" style={linkStyle}>My List</Link>
        </div>
      </nav>
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </main>
    </div>
  );
}

