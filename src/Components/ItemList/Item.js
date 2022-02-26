import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 const Item = ({ albumsData }) => {
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
      </CardActionArea>
    </Card>
  );
}

export default Item;
