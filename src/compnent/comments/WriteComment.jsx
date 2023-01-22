
import React,{useState} from 'react'
import {  TextField, Typography,Box } from '@mui/material';
import {TfiCommentsSmiley} from "react-icons/tfi"
import { LoadingButton } from '@mui/lab';
import {useUser} from "../context/UserContext"
import supabase from '../../logic/database/supabase';
import { toast } from 'react-toastify';

const WriteComment = () => {
  const {user}=useUser()
    const [loading,setLoading]=useState(false)
    const [comment,setComment]=useState("")
    const handleSubmit=async (e)=>{
        e.preventDefault()
        console.log(user)
        if (comment.length===0){

          toast.info("اضف تعليقك")
        }else
        {
      
          setLoading(true)
          const { data, error } = await supabase.from('comment').insert([{ comment: comment, userid: user.phone}]);
          if(error){
            console.log(error)
          }else{
            setComment("")
            toast.success("شكرا..")
          }
          setLoading(false)
  }
      

    }
    return (
      <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "95%",
            position:"sticky",
            top:0,
            m: 1,
            gap:2,
            display: "flex",
            margin:"1rem auto",
            // boxShadow:1,
            // zIndex:10
          }}
        >
          <TextField
            autoComplete="off"
            size="small"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            label={<Typography fontFamily={"NX"}>ساعدنا بتعليقك </Typography>}
            fullWidth
            variant="outlined"
            InputProps={{
              inputProps: {
                style: { textAlign: "right" },
              },
            }}
          />
          <LoadingButton
            loading={loading}
            variant="contained"
            // loadingIndicator={  <Typography fontFamily={"NX"}>جاري الحفظ</Typography>}
            loadingPosition="start"
            startIcon={<TfiCommentsSmiley />}
            type="submit"
            // onClick={handleRegestration }
          >
            <Typography fontFamily={"NX"}>ارسال</Typography>
          </LoadingButton>
        </Box>
        </form>
      </>
    );
  };

  export default WriteComment


  export const  LoginPlease=()=>{return(<>
   <Typography
              fontFamily={"NX"}
              fontSize={"12px"}
              color="error"
              alignSelf={"flex-start"}
              width={"100%"}
            >
              !! لكتابة تعليق يرجى الدخول لحسابك او التسحيل{" "}
            </Typography>
  </>)}