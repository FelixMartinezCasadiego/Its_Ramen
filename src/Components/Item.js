import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Estilos/Estilos.css'


const Item = ({ data }) => {
    return (
        
        <div className='ItemJs'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {data.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
            </Card>
        </div>
  );
}


export default Item;