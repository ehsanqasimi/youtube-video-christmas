import React from 'react'
import Nav from './Nav'
import Gift from './sections/giftSection/Gift'
import Home from './sections/Home'
import './style.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
        <Routes>
          <Route exact path='/' element={ <Home/>} />
          <Route exact path='/gift' element={ <Gift/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
