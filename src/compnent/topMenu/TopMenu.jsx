import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { Box } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { MiddleMenu } from "./MiddleMenu";
import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";


const SideWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background-color: rgba(255, 255, 255, 1);
  color: #ffffff;
  min-width: 0px;
  z-index: 100;
`;

export const MenuImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  /* border:1px solid black; */
`;
export const MenuImage = styled.img`
  max-width: 25px;
  max-height: 25px;
`;

export const BasketMenuImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  /* background-color: red; */
`;

function TopMenu() {
  const {  cartQuantity,cartItems,removeFromCart } = useShoppingCart();
  // console.log(cartItems);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "56px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        boxShadow: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
  
      <LeftMenu />
      <MiddleMenu />
      <RightMenu cartQuantity={cartQuantity} cartItems={cartItems} removeFromCart={removeFromCart}/>
    </Box>
  );
}
export default TopMenu;


