import React,{useState} from "react";
import Logo from "../logo/Logo";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Counter from "../badge/Counter";
import LeftDrawer from "../drawer/LeftDrawer"
import { useShoppingCart } from "../context/ShoppingCartContext";
import Basket from "../basket/Basket";


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

const MenuImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  /* border:1px solid black; */
`;
const MenuImage = styled.img`
  max-width: 25px;
  max-height: 25px;
`;

const BasketMenuImageWraper = styled.div`
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

const RightMenu = ({cartQuantity,cartItems,removeFromCart}) => {
  console.log({cartQuantity})
  const [open,setOpen]=useState(false)
  return (
    <>
      <Box
        sx={{
          width: "15%",
          borderLeft: "2px solid #94c93d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BasketMenuImageWraper>
          <IconButton onClick={() => setOpen(true)}>
            <Counter badgeContent={cartQuantity} color="secondary">
              <RiShoppingBasketFill size={"2rem"} color="#94c93d" />
            </Counter>
          </IconButton>
        </BasketMenuImageWraper>

        {/* <MenuImageWraper>
          <FaUserCircle size={"2rem"} color="#94c93d" />
        </MenuImageWraper> */}
      </Box>
      {open ? (
        <LeftDrawer open={open} setOpen={setOpen}>
          <ShowPrduct cartItems={cartItems} removeFromCart={removeFromCart} />
        </LeftDrawer>
      ) : null}
    </>
  );
};
const LeftMenu = () => {
  return (
    <>
      <Box
        sx={{
          width: "15%",
          borderRight: ".5px solid #94c93d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // ml:1
        }}
      >
          <Link to={"/"}>

        <Logo />
          </Link>
      </Box>
    </>
  );
};

const MiddleMenu = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "70%",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to={"/grap"}>
          <MenuImageWraper>
            <MenuImage src="/images/logo-assets/grapeLogo.png" />
            <Typography fontFamily={"NX"} fontSize={"12px"} width={"45px"} color={"text.secondary"}>ورق عنب</Typography>
          </MenuImageWraper>
        </Link>
        <Link to={"/crumb"}>
          <MenuImageWraper>
            <MenuImage src="/images/logo-assets/crom.png" />
            <Typography fontFamily={"NX"} fontSize={"12px"} width={"45px"} color={"text.secondary"}>ملفوف</Typography>
          </MenuImageWraper>
        </Link>
        <Link to={"/backary"}>
          <MenuImageWraper>
            <MenuImage src="/images/logo-assets/muagnat.png" />
            <Typography fontFamily={"NX"} fontSize={"12px"} width={"45px"} color={"text.secondary"}>معجنات</Typography>
          </MenuImageWraper>
        </Link>
        <Link to={"/frozen"}>
          <MenuImageWraper>
            <MenuImage src="/images/logo-assets/mfrznat.png" />
            <Typography fontFamily={"NX"} fontSize={"12px"} width={"45px"} color={"text.secondary"}>مفرزنات</Typography>
          </MenuImageWraper>
        </Link>
      </Box>
    </>
  );
};


const ShowPrduct = ({ cartItems,removeFromCart }) => {
  return (
    <>
      
        {cartItems.map((el) => (
          <React.Fragment key={el.productId}>
            <Basket  productId={el.productId} qty={el.quantity} removeFromCart={removeFromCart}/>
          </React.Fragment>
        ))}
    
    </>
  );
};