import React from "react";
import Logo from "../logo/Logo";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const LeftMenu = () => {
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
