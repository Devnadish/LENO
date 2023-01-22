import { Box, Typography } from "@mui/material";

const Comment=({comment="التعليقات", date="10/10/2023", type="ورق عنب",image="images/logo-assets/logo.png"})=>{
    return (
      <>
        <Box
          sx={{
            width: "99%",
            height: "150px",
            borderRadius: "8px",
            border: "1px solid #E7EBF0",
            wordBreak: "break-all",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: "20%",
              ml: "5px",
              borderRight: "1px solid #E7EBF0",
              p: 1,
            }}
          >
            <img src={image} style={{width:"100%",maxWidth:"55px"}}  loading="lazy" />
          </Box>

          <Box sx={{
              width: "80%",
              ml: "5px",
              borderRight: "1px solid #E7EBF0",
              p: 1,
            }} >
            <Typography
              variant="span"
              fontFamily={"NX"}
              fontSize={".7rem"}
              color={"text.secondary"}
              p={0.5}
            >
              {comment}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="span"
                fontFamily={"NX"}
                fontSize={"10px"}
                color={"text.secondary"}
                // p={0.5}
              >
                {date}
              </Typography>
              {/* <Typography
                variant="span"
                fontFamily={"NX"}
                fontSize={".6rem"}
                color={"text.secondary"}
                // p={0.5}
                alignSelf={"flex-end"}
                sx={{backgroundColor:"#BEF264",borderRadius:2,px:1,minHeight:0,lineHeight:1.7}}
              >
                {type}
              </Typography> */}
            </Box>
          </Box>
        </Box>
      </>
    );
  }

  export default Comment