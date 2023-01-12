import React from 'react'
import styled from "styled-components";
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
  margin-top: 5rem;
  `;


const Box1= styled.div`
height: 100px;
 background-color: green;
 width:100%

`;



function Body({children}) {
  return (
    <BodyWrapper>
    
    <MyRoutes/>
    </BodyWrapper>
  );
}

export default Body