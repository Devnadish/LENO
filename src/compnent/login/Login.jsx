import React,{useState} from 'react'
import {Box,Button,Fab, TextField, Typography} from '@mui/material';
import {FaUserCircle} from "react-icons/fa"
import DiloagShow  from "../dailog/DiloagShow"
import { Link } from 'react-router-dom';
import {FiUserPlus} from "react-icons/fi"
import {MdLogin} from "react-icons/md"
import supabase from '../../logic/database/supabase';
import useLogin from "../utils/hooks/useLogin";


export default function Login({setIslogin}) {
  const [open,setOpen]=useState(false)
  const handlelogin=()=>{setOpen(true)}
  return (
    <>
    <Box sx={{ position:"fixed" ,bottom:"25px",left:"10px"}}>
      <Fab color="#3D4C61" aria-label="add" onClick={handlelogin}>
        <FaUserCircle size={"2.5rem"} />
      </Fab>
    </Box>
    {open && <DiloagShow open={open} toggle={setOpen} titleColor={"#3D4C61"}><LoginControl setOpen={setOpen} setIslogin={setIslogin}/></DiloagShow>}
    </>
  );
}

const LoginControl = ({setOpen,setIslogin}) => {
const [user,setUser]=useState(null)
const [userData,setUserData]=useState({})
// const {setIslogin}=useLogin()



  const loginLogic =async() => {
const { data, error } = await supabase
  .from("user")
  .select()
  .eq("phone", user)
  


if (data){
  setUserData({ name: data[0]?.name, phone: data[0]?.phone });
  localStorage.setItem("isLogged", JSON.stringify({ name: data[0]?.name, phone: data[0]?.phone }));
  setIslogin(true)
  setOpen(false);

  
}
if (error) console.log(error);
 
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          justifyContent: "center",
          padding: "3rem",
          gap: "1rem",
          border: "1px solid rgba(0,0,0,.9)",
        }}
      >
        <TextField
          id="outlined-basic"
          size="small"
          // value={user}
          onChange={(e)=>setUser(e.target.value)}
          label={
            <Typography fontFamily={"NX"}>رقم الجوال او الايميل</Typography>
          }
          variant="outlined"
          InputProps={{
            inputProps: {
                style: { textAlign: "center" },
            }
        }}
        />

        <Box
          sx={{
            display: "flex",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            startIcon={<FiUserPlus />}
            to={"/register"}
          >
            <Typography fontFamily={"NX"}>تسجيل</Typography>
          </Button>
          <Button startIcon={<MdLogin />} variant="contained" sx={{backgroundColor:"#3D4C61"}} onClick={loginLogic}>
            <Typography fontFamily={"NX"}>دخول</Typography>
            
          </Button>
        </Box>
        <Link>
          <Typography fontSize={"12px"} fontFamily={"NX"}>
            {" "}
            نسيت كلمة المرور ؟
          </Typography>
        </Link>
      </Box>
    </>
  );
};

 

 