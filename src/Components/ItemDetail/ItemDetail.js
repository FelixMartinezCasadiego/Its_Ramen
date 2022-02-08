import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const ItemDetail = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="345px"
          image={data.img}
          // image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {data.status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemDetail;