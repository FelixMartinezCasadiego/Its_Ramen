import React from "react";

const Initial = 1;
const Stock = 5;
const PedidoMinimo = 1;

const ItemCount = () => {

  const [counter, setCounter] = React.useState(Initial)

  const handlerCounterUp = () => {
    if (counter == Stock ) {
      setCounter(counter + 0);
    }
    else if (counter < Stock) {
      setCounter(counter + 1);
    };
  };

  const handlerCounterDown = () => {
    if (counter === PedidoMinimo) {
      setCounter(counter - 0);
    }
    else if ( counter <=Stock ) {
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
    </div>
  )

}
 

export default ItemCount;






// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Badge from '@mui/material/Badge';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// export default function BadgeVisibility() {
//   const [count, setCount] = React.useState(1);
//   const [invisible, setInvisible] = React.useState(false);

//   const handleBadgeVisibility = () => {
//     setInvisible(!invisible);
//   };

//   return (
//     <Box
//       sx={{
//         color: 'action.active',
//         display: 'flex',
//         flexDirection: 'column',
//         '& > *': {
//           marginBottom: 2,
//         },
//         '& .MuiBadge-root': {
//           marginRight: 4,
//         },
//       }}
//     >
//       <div>
//         <Badge color="secondary" badgeContent={count}>
//           <ShoppingCartIcon />
//         </Badge>
//         <ButtonGroup>
//           <Button
//             aria-label="reduce"
//             onClick={() => {
//               setCount(Math.max(count - 1, 0));
//             }}
//           >
//             <RemoveIcon fontSize="small" />
//           </Button>
//           <Button
//             aria-label="increase"
//             onClick={() => {
//               setCount(count + 1);
//             }}
//           >
//             <AddIcon fontSize="small" />
//           </Button>
//         </ButtonGroup>
//       </div>

//     </Box>
//   );
// }
