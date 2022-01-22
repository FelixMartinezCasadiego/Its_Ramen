import React, { Component } from 'react';
import './App.css';

// Carpeta Components
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <NavBar />
        <ItemListContainer 
        title="Tipo de Ramen 1" 
        description="Breve descipción 1"/>
        <ItemListContainer 
        title="Tipo de Ramen 2" 
        description="Breve descipción 2"/>
        
      </div>
    ); 
  }
}

export default App;