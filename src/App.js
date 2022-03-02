import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Home';
import MyList from './MyList';
import Form from "./Form";


export default function App() {

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Dictionary App</h1>
        <Link to="/">Home</Link>
        <Link to="/mylist">My List</Link>
      </nav>

      <Form />
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </main>
    </div>
  );
}

