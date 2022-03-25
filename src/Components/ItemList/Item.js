import * as React from 'react';

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Context
import { ItemsContext } from '../../Context/ItemsContext';
import { useContext } from 'react';

 const Item = ({ albumsData }) => {

  const [ItemsCart, setItemsCart] = useContext(ItemsContext);

  // const addToCart = () =>{
  //   const ItemsToCart = {name: albumsData.title, price: albumsData.price}
  //   setItemsCart(curr=>[...curr, ItemsToCart]);
  // }

  const onAdd = (products) => {
    const exist = ItemsCart.find(x=> x.id === products.id);
    if(exist){
       setItemsCart(ItemsCart.map(x=> x.id === products.id ? {...exist, qty: exist.qty +1} : x ))
    } else {
       setItemsCart([...ItemsCart, {...products, qty: 1} ])
  }
}


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={albumsData.img}
          alt={albumsData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {albumsData.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: {albumsData.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {albumsData.resume}
          </Typography>
        </CardContent>
        <button onClick={onAdd} >Add to cart</button>
      </CardActionArea>
    </Card>
  );
}

export default Item;
