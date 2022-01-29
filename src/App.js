import React, { Component } from 'react';
import './App.css';

// Carpeta Components
import NavBar from './Components/NavBar';
import ItemCount from './Components/ItemCount';

class App extends Component {

  render() {
    return(
      <div className='App'>

        <NavBar />

        <ItemCount />
        
      </div>


    ); 
  }
}

export default App;