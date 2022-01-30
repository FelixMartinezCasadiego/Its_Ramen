import React, { Component } from 'react';
import './App.css';

// Carpeta Components
import NavBar from './Components/NavBar';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';

class App extends Component {

  render() {
    return(
      <div className='App'>

        <NavBar />

        <ItemListContainer 
          title= 'Hola'
          description='Adios'
        />
        
      </div>


    ); 
  }
}

export default App;