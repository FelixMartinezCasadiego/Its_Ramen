import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({ data }) => {

  const [car ,setCar] = React.useState([]);

  // const newAdd ={
  //   name: data.name,
  //   image: data.img,
  //   occupation: data.occupation,
  //   status: data.status,
  //  }

  //  const onAdd1 = (null);

  const onAdd = (q) => {

    setCar(q)
  }

  console.log(car);


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
              car >= 1 ? <Button>Ir al carrito</Button> : null
            }
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemDetail;