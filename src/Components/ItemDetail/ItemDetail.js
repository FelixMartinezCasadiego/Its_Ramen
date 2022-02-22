import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ data }) => {

  const [cart ,setCart] = React.useState([]);


  const onAdd = (q) => {

    setCart = (q) ;

    // let obj = {[ ...data, q]};
    // addCart(obj) 
  }

  console.log(cart);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography  variant="h6">
            Name: {data.name} 
          </Typography>
          <Typography variant="h6">
            Nickname: {data.nickname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            birthday: {data.birthday}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Occupation: {data.occupation}
          </Typography>
          <Typography variant="h6">
            status: {data.status}
          </Typography>

            <ItemCount funcionAgrega={onAdd} stock={5} />

            {
              cart >= 1 ? <Button>Ir al carrito</Button> : null
            }
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemDetail;