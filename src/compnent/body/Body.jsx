import React,{useState} from 'react'
import styled from "styled-components";
import {useUser} from "../../compnent/context/UserContext";
import Comments from '../comments/Comments';
import { CommentLoader } from '../loader/Loader';
import MyRoutes from '../Routes/MyRoutes';



const BodyWrapper = styled.div`
  display: flex;
  /* width: calc(100vw - 73px); */
  /* height: 100%; */
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-family: "TB";
  
  /* background-color: red; */
  width:100%;
  margin: 6rem 0  auto auto;
  /* margin-top: 6rem; */
  `;


const Box1= styled.div`
height: 100px;
 background-color: green;
 width:100%

`;



function Body({children}) {
  const {commentsCount, setCommentsCount}=useUser()
  const [loading, setLoading] = useState(false);
  /* console.log({}) */
  return (
    <>
    <BodyWrapper>
    {loading ? <CommentLoader/>:<Comments commentCount={commentsCount} />}

    <MyRoutes/>
    </BodyWrapper>
    </>
  );
}

export default Body