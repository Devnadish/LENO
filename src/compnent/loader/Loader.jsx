
import BounceLoader from "react-spinners/BounceLoader";
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
          color="#36d7b7"
          size={15}
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