import React from "react";

const Initial = 1;
// const Stock = 5;
const PedidoMinimo = 1;

const ItemCount = ({funcionAgrega, stock}) => {

  const [counter, setCounter] = React.useState(Initial)

  const handlerCounterUp = () => {
    if (counter == stock ) {
      setCounter(counter + 0);
    }
    else if (counter < stock) {
      setCounter(counter + 1);
    };
  };

  const handlerCounterDown = () => {
    if (counter === PedidoMinimo) {
      setCounter(counter - 0);
    }
    else if ( counter <=stock ) {
      setCounter(counter - 1);      
    }
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{counter}</p>

      <button onClick={handlerCounterUp}>Incrementar</button>
      <button onClick={handlerCounterDown}>Decrementar</button>

      <h2>Stock = 5</h2>

      <button onClick={ () => funcionAgrega(counter)}> Agregar al carrito </button>  
    </div>
  )

}
 

export default ItemCount;