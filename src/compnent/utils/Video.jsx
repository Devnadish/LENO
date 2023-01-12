import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/comment/Comments";
import Card from "../components/card/Card";
import { AiOutlineEye } from "react-icons/ai";

const Container = styled.div`
   display: flex;
  justify-content: center;

  gap: 24px;
  margin-top: 15px;
  width: 100%;
/* background-color: antiquewhite; */
  
`;

const Content = styled.div`
 display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  
`;
const VideoWrapper = styled.div`
/* display: flex; */
  /* justify-content: center;
  flex-direction: row; */
width: 100%;
height:100%;

`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin-top: 1px;
  margin-bottom: 1px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;

const Info = styled.span`
font-size: 12px;
display: flex;
justify-content: space-between;
align-items: center;
gap:10px;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size:10px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;


const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Styleiframe= styled.div`
  
`;
 
const Video = ({videoId,
  viewCounter,
  likeCouner,
  videoTitle,
  dislikeCounter}) => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <Styleiframe>
          <iframe
            width="100%"
            height="100%"
            // https://www.youtube.com/watch?v=
            // src="https://www.youtube.com/embed/uVb_j7Skl6g?autoplay=1&loop=1&color=white&mute=1&start=15&rel=0" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="1"
            frame
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          </Styleiframe>
        </VideoWrapper>
        <Details>
        <Title>{videoTitle}</Title>
          <Info> <AiOutlineEye/> {viewCounter} </Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon sx={{fontSize:"1rem"}}/> {likeCouner}
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon sx={{fontSize:"1rem"}}/> {dislikeCounter}
            </Button>
            <Button>
              <ReplyOutlinedIcon sx={{fontSize:"1rem"}}/> 
            </Button>
            
          </Buttons>
        </Details>
        <Hr />
       
      </Content>
      
    </Container>
  );
};

export default Video;
