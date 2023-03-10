import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function ErorrBox({errorInfo,setIsErrors}) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          color: "red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "end",
          borderRadius: 2,
          border: "1px solid gray",
          py: 1,
          position: "relative",
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            boxShadow:0,
            border:"0px",
            minWidth:0,
            width:"25px",
            height:"25px",
          }}
          onClick={()=>setIsErrors(false)}
        >
          X
        </Button>
        {errorInfo.map((el, idx) => (
          <React.Fragment key={idx}>
            <Typography fontFamily={"NX"}>
              {el}
              <span
                style={{
                  color: "blue",
                  fontSize: "1rem",
                  marginRight: "1rem",
                  marginLeft: "1rem",
                }}
              >
                {" "}
                *
              </span>
            </Typography>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
}

export default ErorrBox
