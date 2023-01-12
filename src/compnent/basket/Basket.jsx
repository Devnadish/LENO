import React from 'react'
import { getItem1 } from '../../logic/itemControl';
import { Box, Typography ,Button} from '@mui/material';

const Basket = ({productId, qty,removeFromCart}) => {
    const itemData=getItem1(productId)
    const total=parseInt( itemData[0].price)* parseInt( qty)





    
  return (
    <>
      <Box
        mt={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid lightgray",
        }}
      >
        <Box ml={1} sx={{ maxWidth: "112px", width: "112px" }}>
          <img
            src={itemData[0].image}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box sx={{alignSelf:"flex-end",mb:2}}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#a50000",
              minWidth: 0,
              width: "55px",
              mt:1,
              mr: 2,
            }}
            onClick={()=>{removeFromCart(productId)}}
          >
            <Typography fontFamily={"NX"} color={"white"} fontSize={".75rem"}>
              مسح
            </Typography>
          </Button>
          </Box>

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}>
          <Typography
            mr={1}
            fontFamily={"NX"}
            color={"GrayText"}
            fontSize={".8rem"}
          >
            {itemData[0].type}
          </Typography>

          <Typography
            mr={1}
            fontFamily={"NX"}
            color={"GrayText"}
            fontSize={".65rem"}
          >
            {itemData[0].whight} x {qty}
          </Typography>

          <Typography
            mr={1}
            fontFamily={"NX"}
            color={"GrayText"}
            fontSize={".85rem"}
          >
            <span style={{ color: "green" }}>القيمة : </span> {total}
          </Typography>
          </Box>

          {/* <Typography mr={1} fontFamily={"CB"} color={"whitesmoke"}>{qty}</Typography> */}
        </Box>
      </Box>
    </>
  );
}

export default Basket

 