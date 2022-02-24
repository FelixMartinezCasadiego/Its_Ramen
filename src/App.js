import './App.css';
import React from 'react';


// Components
import NavBar from './Components/NavBar/NavBar';

// React - Router - Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Views
import Home from './Components/NavBar/Pages/Home';
import About from './Components/NavBar/Pages/About';
import Menu from './Components/NavBar/Pages/Menu';
import RamenHistory from './Components/NavBar/Pages/RamenHistory'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';


const App = () => {

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/RamenHistory' element={<RamenHistory />} />
          <Route path='/about' element={<About />} />
          <Route path='/details/:id' element={<ItemDetailContainer  />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;
