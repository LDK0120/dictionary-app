import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Home';
import MyList from './MyList';

export default function App() {

  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/mylist">My List</Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </div>
  );
}

