import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const ItemDetail = ({ data }) => {
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemDetail;