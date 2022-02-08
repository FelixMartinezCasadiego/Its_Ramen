import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const Item = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="345px"
        //   image={data.img}
          image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;