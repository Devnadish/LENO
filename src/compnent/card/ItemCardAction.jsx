import { Box, CardActions, IconButton, Typography } from '@mui/material'
import React from 'react'
 
import { RiShoppingBasketFill } from "react-icons/ri";

function ItemCardAction({price}) {
  return (
<CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconButton aria-label="add to favorites">
            <RiShoppingBasketFill />
          </IconButton>
          <Typography
          variant="h6"
          color="success.main"
          sx={{
            lineHeight: 1.5,
            fontFamily: "CB",
            // backgroundColor: "antiquewhite",
            p: 1,
            border:"1px solid #E7EBF0",
            borderRadius: 2,
          }}
        >
          <span>السعر </span> {price} <span>ر.س </span>
        </Typography>
        </Box>
        
      </CardActions>
  )
}

export default ItemCardAction