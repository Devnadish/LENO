import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import {CiLogout,CiReceipt} from "react-icons/ci"
import {MdOutlinePassword} from "react-icons/md"
import {CgTrack} from "react-icons/cg"

export default function Submenu({open,setOpen,anchorEl,setAnchorEl,logout,userName}) {
 
  const [placement, setPlacement] = React.useState();
 
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: "400px", }}>
      <Popper open={open} anchorEl={anchorEl} placement={"top"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <MenuItems setOpen={setOpen} logout={logout}  userName={userName}/>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}


const MenuItems = ({setOpen,logout,userName}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          width:"300px",
          borderBottom:"1px solid #ccc",
          
        }}
      >
      <Button
        onClick={() => {
          setOpen(false);
        }}
        variant={"contained"}
        sx={{
          minWidth: 0,
          boxShadow: 0,
          borderRadius: 0,
          backgroundColor: "warning.light",
          width: "25px",
          height: "25px",
        }}
        // color={"warning"}
      >
        X
      </Button>
      <Typography mr={2} fontFamily={"NX"} color={"warning.dark"}>
            مرحبا .. {userName}
          </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          width:"300px",
          borderBottom:"1px solid #ccc",
          "&:hover":{
            // boxShadow:1
            backgroundColor:"#ccc"
          }
        }}
      >
        <CgTrack />
        <Typography color={"text.secondary"} fontFamily={"NX"}>متابعة الطلب</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          borderBottom:"1px solid #ccc",
          "&:hover":{
            // boxShadow:1
            backgroundColor:"#ccc"
          }

        }}
      >
        <CiReceipt />
        <Typography color={"text.secondary"} fontFamily={"NX"}>كشف حساب</Typography>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom:"1px solid #ccc",
          p: 1,
          "&:hover":{
            backgroundColor:"#ccc"
          }
        }}
        onClick={logout}
      >
        <MdOutlinePassword />
        <Typography fontFamily={"NX"}>تغيير كلمة السر</Typography>
      </Box>
    

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          "&:hover":{
            backgroundColor:"#ccc"
          }
        }}
        onClick={logout}
      >
        <CiLogout />
        <Typography fontFamily={"NX"}>خروج</Typography>
      </Box>
    </>
  );
};