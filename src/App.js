import './App.css';
import React from 'react';


// Components
import NavBar from './Components/NavBar/NavBar';

// React - Router - Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Context
import { ItemsProvider } from './Context/ItemsContext';

// Views
import Home from './Components/NavBar/Pages/Home';
import About from './Components/NavBar/Pages/About';
import RamenHistory from './Components/NavBar/Pages/RamenHistory'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import MenuCart from './Components/NavBar/Pages/MenuCart';
import Shop from './Components/NavBar/Pages/Shop/Shop';


const App = () => {

  return (
    <Router>

      <ItemsProvider>
        <div className='App BackgroundApp'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/RamenHistory' element={<RamenHistory />} />
            <Route path='/about' element={<About />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/details/:id' element={<ItemDetailContainer  />} />
            <Route path='/category/:requested' element={<MenuCart  />} />
          </Routes>
        </div>
      </ItemsProvider>
    </Router>
  )
}

export default App;
