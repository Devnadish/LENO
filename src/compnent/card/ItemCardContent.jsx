import React from 'react'
import { styled } from '@mui/material/styles';
import {MdOutlineExpandMore} from "react-icons/md"
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    backgroundColor:"#93c93d83",
   
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function ItemCardContent({title,expanded,handleExpandClick}) {
  return (
    <CardContent
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
   
  
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{  lineHeight: 1.5, fontFamily: "NX" }}
    >
      {title}
    </Typography>

    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <MdOutlineExpandMore />
    </ExpandMore>


  </CardContent>

  )
}

export default ItemCardContent