// import React, { Component } from 'react';
import './App.css';
import Basket from './Components/Header/Basket';
import Header from './Components/Header/Header';
import Main from './Components/Header/Main';
import data from './Components/Header/Data';
import { useState } from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components Folders
// import NavBar from './Components/NavBar/NavBar';

// Pages Folders
// import Home from './Components/NavBar/Pages/Home';
// import Episodes from './Components/NavBar/Pages/Episodes';
// import Search from './Components/NavBar/Pages/Search';
// import ItemDetailContainerCopy from './Components/ItemDetail/ItemDetailContainerCopy';

// import Header from './Entrega 10/Header';
// import ItemsList from './Entrega 10/ItemList2';


// 5 - Importar ItemProvider
// import { ItemProvider } from './Contex/CartContext/';

function App () {
  const {products} = data;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  
  return (

    <div className='App'>
      <Header countCartItems={cartItems.length} />
      <div className='row'>
        <Main onAdd={onAdd} products={products} />
        <Basket 
        onAdd={onAdd} 
        onRemove={onRemove}
        cartItems={cartItems} />
      </div>
    </div>

    // <ItemProvider>
    //   <div className='App'>
    //     <Header />
    //     <ItemsList />
    //   </div>
    // </ItemProvider>
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
