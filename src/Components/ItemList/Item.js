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

  const addToCart = () =>{
    const ItemsToCart = {name: albumsData.title, price: albumsData.price}
    setItemsCart(curr=>[...curr, ItemsToCart]);
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
        <button onClick={addToCart} >Add to cart</button>
      </CardActionArea>
    </Card>
  );
}

export default Item;
