import React from 'react';
import Locations from './pages/Locations';
import Characters from './pages/Characters';
import './App.css'
import {Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
      <header>
        <ul>
          <li>
            <Link to="/">Locations</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </header>
      <div className="App">
        <Routes>
        <Route path='/' exact element={<Locations />}></Route>
        <Route path='/characters' element={<Characters />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
