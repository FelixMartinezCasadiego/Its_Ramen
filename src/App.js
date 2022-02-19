import React, { Component } from 'react';
import './App.css';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components Folders
// import NavBar from './Components/NavBar/NavBar';

// Pages Folders
// import Home from './Components/NavBar/Pages/Home';
// import Episodes from './Components/NavBar/Pages/Episodes';
// import Search from './Components/NavBar/Pages/Search';
// import ItemDetailContainerCopy from './Components/ItemDetail/ItemDetailContainerCopy';

import Header from './Entrega 10/Header';
import ItemsList from './Entrega 10/ItemList2';


// 5 - Importar ItemProvider
import { ItemProvider } from './Contex/CartContext';

const App = () => {
  return (

    <ItemProvider>
      <div className='App'>
        <Header />
        <ItemsList />
      </div>
    </ItemProvider>
  );
};



// class App extends Component {

//   render() {
//     return(



//       // <Router>

//       //   <div className='App'>

          
//       //       <NavBar />
          
         
        

//       //       <Routes>
//       //           <Route path="/" element={<Home />} />
//       //           <Route path="/Episodes" element={<Episodes />} />
//       //           <Route path="/Search" element={<Search />} />
//       //           <Route path='/detail/:id' element={<ItemDetailContainerCopy />} />
//       //       </Routes>

          

//       //   </div>
//       // </Router>   

      

//     ); 
//   }
// }


export default App;
