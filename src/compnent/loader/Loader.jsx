
import BounceLoader from "react-spinners/BounceLoader";

import RingLoader from "react-spinners/RingLoader";

import { Box } from "@mui/material";

function Loader({color="red"}) {
  return (
    <>
      <Box
        sx={{
          width: "5rem",
          height: "5rem",
          border: "1px solid",
          position: "relative",
        }}
      >
        <BounceLoader
          color="#BEF264"
          size={150}
          style={{
            display: "inline",
            position: "absolute",
            top: "-5px",
            left: "-5px",
          }}
        />
      </Box>
    </>
  );
}

export default Loader



export const CommentLoader=({color="red"})=> {
  return (
    <>
      <Box
      sx={{
        position: "fixed",
        top: "70px",
        left: "8px",
        width: "40px",
        height: "50px",
        // boxShadow: 1,
        // borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "#BEF264",
        // p: 1,
      }}
      >
        <BounceLoader
          color="#BEF264"
          size={40}
          style={{
            display: "inline",
            position: "absolute",
            top: "-5px",
            left: "-5px",
          }}
        />
      </Box>
    </>
  );
}



export const  ImageLoader=({color="#bef264b2"})=> {
  return (
    <>
     
        <RingLoader
          color={color}
          size={250}
          style={{
            display: "inline",
            position: "absolute",
            top: "-5px",
            left: "-5px",
          }}
        />
    
    </>
  );
}
