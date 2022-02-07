import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


// Carpeta Components
import NavBar from './Components/NavBar/NavBar'
// import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';

// Pages
import Home from './Components/NavBar/Pages/Home';
import Locations from './Components/NavBar/Pages/Locations';
import Menu from './Components/NavBar/Pages/Menu';
import RamenHistory from './Components/NavBar/Pages/RamenHistory';

class App extends Component {

  render() {
    return(

      <Router>

        <div className='App'>
          <NavBar />
          {/* <ItemDetailContainer /> */}
        </div>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/RamenHistory" element={<RamenHistory />} />
          <Route path="/Locations" element={<Locations />} />
        </Routes>
      </Router>

    ); 
  }
}

export default App;