import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemDetail = ({albumsData}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={albumsData.img}
          alt={albumsData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {albumsData.title}
            {albumsData.price}
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





// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// // useState
// import {useState, useEffect} from 'react';

// import { useParams } from 'react-router-dom';
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   documentId,
// } from 'firebase/firestore';
// import { db } from '../../firebase/firebaseConfig';
// import Item from '../ItemList/Item';

// const ItemDetail = () => {

//   const[albumData, setAlbumData] = useState ([]);
//   const {id} = useParams();
//   console.log(albumData);

//   useEffect( () => {
//     const getsAlbum = async () => {
//       const q = query(collection(db, 'ramen'), where (documentId(), '==', id));
//       const docs = [];
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach( (doc) => {
//       docs.push({...doc.data(), id: doc.id})
//       });
//       setAlbumData(docs);
//     };  
//     getsAlbum();
// }, []);


  // return (

  //   <div>
  //     {albumData.map((albumsData) =>
  //       {return <Item albumsData={albumsData} /> }
  //     )}
  //   </div>
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component=" img"
    //     alt="green iguana"
    //     height="140"
    //     image={albumsData.img}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Add to cart</Button>
    //   </CardActions>
    // </Card>
//   );
// }

export default ItemDetail;
