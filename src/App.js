import React, { Component } from 'react';
import './App.css';

// Carpeta Components
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer';

class App extends Component {

  render() {
    return(
      <div className='App'>

        <NavBar />

        <ItemDetailContainer />
        
      </div>


    ); 
  }
}

export default App;