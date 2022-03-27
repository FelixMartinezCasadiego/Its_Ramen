import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


// React Router Dom
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
        <div> 
            <h3> Ramen History </h3>
            <Link to='/RamenHistory'>
              <img src='https://i.imgur.com/EL3w4oI.gif' alt='Ramen History' />
            </Link> 
        </div> 

        <ImageList sx={{ width: 500, height: 450 }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Link to={`/category/${item.title}`}>
                <ImageListItemBar
                  title={item.title}
                />
              </Link>
            </ImageListItem>))}
        </ImageList>

    </div>
  );
}

const itemData = [
  {
    img: 'https://i.pinimg.com/originals/fb/68/34/fb683473369848e5f176c2fd4df3249a.jpg',
    title: 'Starter',

  },
  {
    img: 'https://wallpapercave.com/wp/wp7507998.jpg',
    title: 'Ramen',
  },
  {
    img: 'https://64.media.tumblr.com/1fe66584f88c828da86c1020b128cd62/tumblr_pc7zb41OxB1vnejvho1_1280.jpg',
    title: 'Drinks',

  },
  {
    img: 'https://w0.peakpx.com/wallpaper/693/869/HD-wallpaper-anime-food-dessert-ice-cream-strawberry-cake-anime.jpg',
    title: 'Dessert',
  },
];
