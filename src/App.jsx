import { useState ,useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./compnent/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "react-error-boundary";
import TopMenu from "./compnent/topMenu/TopMenu";
import Body from "./compnent/body/Body";
import ShoppingCartProvider from "./compnent/context/ShoppingCartContext";
import Login from './compnent/login/Login';
import useLogin from "./compnent/utils/hooks/useLogin";
import { Box, Button, Typography } from "@mui/material";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 100vw;
  max-height: 100vh;
  min-width: 300px;
  background-color: whitesmoke;
`;

function App() {
  const {login,setIslogin,userName}=useLogin()
  const [darkMode, setDarkMode] = useState(false);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
  
  },[login])

  // const [user,setUser] = useState({name:"khalid",phone:"05046642264"});
  return (
    <>
      <ErrorBoundary fallback={<h1 style={{color:"black"}}> Error </h1>}>
      <ShoppingCartProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <BrowserRouter>
          <TopMenu />
          <Container>
          {login ? <InfoBar userName={userName}  setIslogin={setIslogin}/>: <Login setIslogin={setIslogin}/>}
            
              <Body />
          </Container>
            </BrowserRouter>
        </ThemeProvider>
        </ShoppingCartProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          style={{ fontFamily: "CB" }}
        />
      </ErrorBoundary>
    </>
  );
}

export default App;

const InfoBar=({userName,setIslogin})=>{
  
  const Logout=()=>{
    localStorage.removeItem("isLogged");
    setIslogin(false);
  }
  return (
  <>
    <Box
      sx={{
        height: "30px",
        width: "100%",
        backgroundColor: "#94c93d",
        position: "absolute",
        top: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{ ml: 2, height: "20px", backgroundColor: "#3D4C61" }}
        onClick={Logout}
      >
        <Typography fontSize={"12px"} fontFamily={"NX"}>
          خروج
        </Typography>
      </Button>
      <Typography mr={2} fontFamily={"NX"} sx={{ color: "#3D4C61" }}>
        مرحبا .. {userName}
      </Typography>
    
    </Box>
  </>
);}
