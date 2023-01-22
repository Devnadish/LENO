import React,{useState,useEffect} from 'react'
import { Box } from '@mui/material';

import {useUser} from "../context/UserContext"
import WriteComment,{LoginPlease} from "./WriteComment"
import Comment from "./Comment"
import supabase from '../../logic/database/supabase';






function CmmentPage() {
    const {login}=useUser()
    const [loading,setLoading]=useState(false)
    const [comments,setComments]=useState([])
    
    const fechdata=async ()=>{
        const { data, error } = await supabase.from('comment').select();
        console.log(data)
        if (data.length===0){  toast.info("لايوجد تعليقك") }else{
            setComments(data)
        }
    }



    useEffect(() => {
        fechdata()
    }, [])
    

  return (
    <>
    <Box
      sx={{
        backgroundColor: "#BEF264",
        width: "95%",
        height: "60vh",
        mt: "2rem",
        display: "flex",
        border:"1px solid #E7EBF0",
        borderRadius: 2,
        boxShadow: 12,
      }}
    >

     
      <BodyItem login={login} data={comments}/>

      
     
    </Box>
    </>
  );
}
export default CmmentPage



const BodyItem = ({login,data}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            backgroundColor: "white",
            width: "100%",
            overflowY: "auto",
            borderRadius: "8px",
            m: 0.5,
            position: "relative",
          }}
        >
          {login ? <WriteComment /> : <LoginPlease />}
          {data.map((el) => {
            return <React.Fragment key={el.id}>
          <Comment
            comment={el.comment}
            type={"ورق عنب"}
            
            image={import.meta.env.VITE_Avatars+el.userid+".jpg?width=100&height=100&resize=cover"}
            // image={"images/logo-assets/logo.png"}
            date={ new Date(el.created_at).toLocaleDateString('ar-EG', options)}
          
          />      
            </React.Fragment>;
          })}
          
        </Box>
      </>
    );
  };
 
  