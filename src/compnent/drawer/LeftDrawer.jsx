import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box,Button,Typography } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import data from "../../data/all.json"
import {whatsapp} from "../../logic/services"

function LeftDrawer({ open, setOpen, children, drawerWidth, anchor, drHight ,title="سلة المشتريات"}) {
  const {  cartItems } = useShoppingCart();


  const lausum=   cartItems.reduce((total, cartItem) => {
     const item = data.find((i) => i.productId === cartItem.productId);
     return total + (item?.price || 0) * cartItem.quantity;

   }, 0)
  const handlejob = () => {
    // alert("Job");
    whatsapp()
  };

  return (
    <>
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={open}
        role="presentation"
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            width: "80%",
            marginTop: "auto",
            marginBottom: "auto",
            margin: "auto",
            height: drHight,
            backgroundColor: "#f3f3f3",
          },
        }}
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "transparent",
            position: "relative",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              // borderBottom: "1.5px solid lightgray",
              backgroundColor: "whitesmoke",
              position: "sticky",
              top: 0,
              left: 0,
              zIndex: 100,
              boxShadow: 3,
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{
                minWidth: 0,
                boxShadow: 0,
                ml: 1,
                width: "40px",
                height: "40px",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </Button>
            <Typography
              sx={{
                fontFamily: "TB",
                mr: 1,
                backgroundColor: "#d3d3d3b0",
                color: "black",
                p: 1,
                borderRadius: "8px",
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span> ريال</span>
              <span
                style={{
                  color: "darkblue",
                  fontWeight: "bolder",
                  borderBottom: "1px solid blue",
                  fontSize: "1rem",
                }}
              >
                {lausum}
              </span>
              <span>الاجمالي </span>
            </Typography>
            <Typography sx={{ fontFamily: "CB", color: "text.primary", mr: 1 }}>
              {title}
            </Typography>
          </Box>
          {children}
          <Box
            sx={{
              backgroundColor: "green",
              position: "sticky",
              bottom: 0,
              left: 0,
              // height: "50px",
              width: "100%",
              boxShadow: 1,
              zIndex: 100,
            }}
          >
            <Button fullWidth variant="contained" color="warning" onClick={handlejob}>
            <Typography sx={{ fontFamily: "CB", color: "text.primary"  }}>
              اتمام عملية الشراء
              </Typography>
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default React.memo(LeftDrawer);
