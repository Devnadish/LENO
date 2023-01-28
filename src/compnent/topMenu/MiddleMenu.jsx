import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuImageWraper, MenuImage } from "./TopMenu";

export const MiddleMenu = () => {
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
