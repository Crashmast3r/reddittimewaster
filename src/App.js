import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import { Searchbar } from "./components/Searchbar/Searchbar";
import { Post } from "./components/Post/Post";

function App() {

  const toggleNav = () => {
    document.getElementById("navDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches(".navBtn")) {
      document.getElementById("navDropdown").classList.remove("show");
    }
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <h1>Reddit Time Waster</h1>
          <div className="navContainer">
            <button onClick={toggleNav} className="navBtn">=</button>
            <div id="navDropdown" className="navMenu">
              <a href="https://www.google.com/" className="navLink">Google</a>
              <a href="https://www.netflix.com/" className="navLink">Netflix</a>
            </div>
          </div>
        </header>
        <Post />
        <Searchbar />
      </div>
    </Router>
  );
}

export default App;
