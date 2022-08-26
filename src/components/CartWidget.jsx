import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';


export default function CartWidget({ items }) {
  return (
    <div>
		<Badge badgeContent={items} color="success" max={99} overlap="circular">
    	<ShoppingCartOutlinedIcon
			color = "primary"
			fontSize= "large"
		/>
		</Badge>
    </div>
  )
}
