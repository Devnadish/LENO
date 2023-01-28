import React,{useState,useEffect} from 'react'
import { Box, Button, Typography } from '@mui/material'
import { getItem1 } from '../../logic/itemControl';
import { useParams } from "react-router-dom"
import { useShoppingCart } from "../../compnent/context/ShoppingCartContext";


const container = {
  backgroundColor: "rgba(255, 255, 255,1)",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  gap:.5,
  p:1,
  
};



function Order({price=1.5}) {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  const [qty,setQty]=useState(0)
  const [total,setTotal]=useState(price*qty)
  const PRODUCTID=useParams()
  const itemData=getItem1(PRODUCTID.id)
  // console.log(PRODUCTID)
  // console.log(itemData)
  return (
    <>
      <Box sx={container} color={"primary.main"}>
        <Header itemData={itemData[0]} />
        <ShowImage itemData={itemData[0]} />
        <Quantity
          qty={qty}
          setQty={setQty}
          setTotal={setTotal}
          price={itemData[0].price}
          increaseCartQuantity={increaseCartQuantity}
          decreaseCartQuantity={decreaseCartQuantity}
          productId={itemData[0].productId}

        />
        <Totals total={total} qty={qty} price={itemData[0].price} />
        {/* <Confirm /> */}
      </Box>
    </>
  );
}

export default Order

const Header=({itemData})=>{
  
  return (
  <>
    <Typography fontFamily={"NX"} fontSize={"22px"} color="#5A5A5A">{itemData?.whight}</Typography>
    <Typography fontFamily={"NX"} fontSize={"24px"}> ر.س {itemData?.price}</Typography>
    <Typography fontFamily={"NX"} fontSize={"12px"} color="#999"> {itemData?.notes}</Typography>
  </>
);}

const ShowImage=({itemData})=>{return (
  <>
    <Box sx={{width:"100%"}}>
      <img src={itemData?.image} style={{width:"100%",borderRadius:"8px"}}/>
    </Box>
  </>
);}
const Quantity=({qty,setQty,setTotal,price,increaseCartQuantity, decreaseCartQuantity,productId})=>{


const handleAddQuantity = () => {
  setQty((pre) => pre + 1);
  let tot=qty*price
  setTotal(pre=>tot)
  increaseCartQuantity(productId)


};
const handleMinuseQuantity = () => {
  setQty((pre) => pre - 1);
  let tot=qty*price
  setTotal(pre=>tot)
  decreaseCartQuantity(productId)
};

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
            border: "1px solid",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}

        >
          <Box sx={{ width: "20%", borderRight: "1px solid" }}>
            <Button
              fullWidth
              color={"error"}
              variant="contained"
              sx={{ minWidth: 0, borderRadius: 0 }}
              onClick={handleMinuseQuantity}
              disabled={qty <= 0 ?  true : false}
            >
              -
            </Button>
          </Box>
          <Box sx={{ width: "60%" }}>{qty}</Box>
          <Box sx={{ width: "20%", borderLeft: "1px solid" }}>
            <Button
              fullWidth
              color={"success"}
              variant="contained"
              sx={{ minWidth: 0, borderRadius: 0 }}
              onClick={handleAddQuantity}
            >
              +
            </Button>
          </Box>
        </Box>
        <Typography fontFamily={"NX"} fontSize={"22px"} color="#5A5A5A">
          الكمية
        </Typography>
      </Box>
    </>
  );}


const Totals=({total,qty,price})=>{return (
  <>
    <Box sx={{width:"100%" ,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       <Box sx={{width:"50%",border:"1px solid",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box   sx={{width:"100%" ,borderRadius:"8px",borderColor:"success"}}>
              <Typography  fontFamily={"NX"} fontSize={"18px"} color="success">{qty*price}</Typography>
            </Box>
       </Box>
       <Typography fontFamily={"NX"} fontSize={"22px"} color="#5A5A5A">الاجمالي</Typography>
    </Box>
  </>
);}


const Confirm=()=>{return (
  <>
            <Button  fullWidth variant='contained' >
              <Typography  fontFamily={"NX"} fontSize={"18px"} color="success">إضافة للسلة</Typography>
            </Button>
    
  </>
);}
