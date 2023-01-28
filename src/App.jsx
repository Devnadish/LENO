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
import UserContext,{useUser} from "./compnent/context/UserContext";
import supabase from './logic/database/supabase';
import Comments from "./compnent/comments/Comments";
import {CommentLoader} from "./compnent/loader/Loader";



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

 
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  const getData =async ()=>{
    setLoading(true)
    const { count:commentCountRows } = await supabase
    .from("comment")
    .select('*',{count:'exact'})
    setCommentCount(commentCountRows)
    setLoading(false)
  // console.log(commentCount)
  }
  





useEffect(() => {
  // getData();

}, []);
  
  return (
    <>
      <ErrorBoundary fallback={<h1 style={{ color: "black" }}> Error </h1>}>
        <ShoppingCartProvider>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <BrowserRouter>
              <UserContext>
                <TopMenu />
                <Container>

                
                  <Body />
                </Container>
              </UserContext>
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


