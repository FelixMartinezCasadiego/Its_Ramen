import './App.css';
import ItemListContainer from './Components/ItemList/ItemListContainer';

// Components
import NavBar from './Components/NavBar/NavBar'

const App = () => {

  return (
    <div className='App'>

      <NavBar />
      <ItemListContainer />
      
    </div>
  )
}

export default App;
