import { Avatar, Box, CardHeader, Chip, Typography } from '@mui/material'


function ItemCardHeader({Xavatar,whight,type}) {
  return (
    <CardHeader
    avatar={<Avatar src={Xavatar} aria-label="recipe" />}
   
    title={
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            gap:1,
            width:"100%"
          }}
        >
          <Typography
            textAlign={"right"}
            sx={{ fontFamily: "NX", lineHeight: 1.5 }}
          >
            {whight}
          </Typography>
          <Chip
            size="small"
            variant="outlined"
            sx={{ color:"#94c93d"}}
            label={
              <Typography
                textAlign={"right"}
                sx={{ fontFamily: "NX", lineHeight: 1.5,fontWeight:"bold" }}
              >
                {type}
              </Typography>
            }
          />
        </Box>
      </>
    }
  />
  )
}

export default ItemCardHeader