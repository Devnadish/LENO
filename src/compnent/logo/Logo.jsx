


import BounceLoader from "react-spinners/BounceLoader";
import { Box } from "@mui/material";
import styled from "styled-components";

// const ImageWrapper = styled.div``;

const  LogoImage = styled.img`
 /* transform: rotate(90deg); */
max-width: 100%;
max-height: 100%;
`;



 
function Logo() {
  return (
    <>
      <Box
        sx={{
          width: "4rem",
          height: "2.5rem",
          display:"flex",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          ml:.5
        }}
      >
        <LogoImage src="/images/logo-assets/logo.png" />
        <BounceLoader
          color="#94c93d"
          size={10}
          style={{
            display: "inline",
            position: "absolute",
            top: "12px",
            left: "23px",
          }}
        />
      </Box>
    </>
  )
}

export default Logo