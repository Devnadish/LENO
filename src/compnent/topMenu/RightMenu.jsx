import React, { useState } from "react";
import { RiShoppingBasketFill } from "react-icons/ri";
import { Box, IconButton } from "@mui/material";
import Counter from "../badge/Counter";
import LeftDrawer from "../drawer/LeftDrawer";
import { ShowPrduct } from "./ShowPrduct";
import { BasketMenuImageWraper } from "./TopMenu";

export const RightMenu = ({ cartQuantity, cartItems, removeFromCart }) => {
  // console.log({ cartQuantity });
  const [open, setOpen] = useState(false);
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
