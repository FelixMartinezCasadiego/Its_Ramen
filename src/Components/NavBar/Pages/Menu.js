import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
        textDecoration: 'none',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'lowercase',
    },
    upperText: {
        textTransform: 'uppercase',
    },
    link: {
        color: 'red',
        fontSize: 18,
        textDecoration: 'none',
    },
};

  return (
    <div>
			<Button
				style={styles.popUpBtn}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<span style={styles.upperText}>G</span>enders
			</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
            <Link to='/category/Starter' style={styles.link} >Starter</Link>
        </MenuItem>
        <MenuItem>
            <Link to='/category/Ramen' style={styles.link} >Ramen</Link>
        </MenuItem>
        <MenuItem>
            <Link to='/category/Drinks' style={styles.link} >Drinks</Link>
        </MenuItem>
        <MenuItem>
            <Link to='/category/Dessert' style={styles.link} >Dessert</Link>
        </MenuItem>

      </Menu>
    </div>
  );
}


