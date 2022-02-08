import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components Folders
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainerCopy';

// Pages Folders
import Home from './Components/NavBar/Pages/Home';
import Comics from './Components/NavBar/Pages/Comics';
import Search from './Components/NavBar/Pages/Search';


class App extends Component {

  render() {
    return(

      <Router>

        <div className='App'>
          <NavBar />
        

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Comics" element={<Comics />} />
            <Route path="/Search" element={<Search />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
        </Routes>

        </div>
      </Router>

    ); 
  }
}


export default App;
