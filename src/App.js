
import './App.css';

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
    </div>
  );
}

export default App;
