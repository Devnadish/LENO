import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./compnent/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "react-error-boundary";
import TopMenu from "./compnent/topMenu/TopMenu";
import Body from "./compnent/body/Body";
import Loader from "./compnent/loader/Loader"
import ShoppingCartProvider from "./compnent/context/ShoppingCartContext";


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  max-width: 100vw;
  max-height: 100vh;
  min-width: 300px;
  /* width: 100%; */
  /* height: 100vh; */

 
  background-color: whitesmoke;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
   
  return (
    <>

      <ErrorBoundary fallback={<h1 style={{color:"black"}}> Error </h1>}>
      <ShoppingCartProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <BrowserRouter>
          <TopMenu />
          <Container>
         
              {/* <Loader/> */}
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
