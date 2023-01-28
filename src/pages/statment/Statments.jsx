import React, { useState,useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {useUser} from "../../compnent/context/UserContext"
import supabase from '../../logic/database/supabase';
import styled from "styled-components";
import { toast } from 'react-toastify';
import {TbListDetails} from "react-icons/tb"
import DiloagShow from '../../compnent/dailog/DiloagShow';
import {FORMATDATE,getItemName} from "../../logic/util"
import {ImageLoader} from "../../compnent/loader/Loader"

const Table=styled.table`
 width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: .5px;
  border-color: #40bf86;
  border-style: solid;
  color: #000000;
  direction: rtl;
  font-family: "NX";



`;


const TableData=styled.td`
 border-width: .5px;
 border-color: #40bf86;
  border-style: solid;
  padding: 3px;
  font-family: "NX";
`;
/* ---------------------- */
const TableH=styled.th`
 border-width: .5px;
 border-color: #40bf86;
  border-style: solid;
  padding: 3px;
  color: white;
  background-color: #40bf86;
  font-family: "NX";
`;
/* ---------------------- */
const TableHead=styled.thead`
 border-width: .5px;
 border-color: #40bf86;
  border-style: solid;
  padding: 3px;
  font-family: "NX";
  `;
/* ---------------------- */



function Statments() {
  const {user}=useUser()
  const [statment,setStatment]=useState([])
  const [loading,setLoading]=useState(true)
  const [checkDetail,setCheckDetail]=useState(false)
  const [invoceData,setinvoceData]=useState([])
  const [invoceTitle,setinvoceTitle]=useState({})

  
  const fechdata=async ()=>{
    const { data, error } = await supabase.from('order_summury').select().eq("userid",user?.phone);
    if (data.length===0){  toast.info("لايوجد حركة للحساب") }else{
      setStatment(data)
    }
}

const handleCheck=async (x,d)=>{
  setCheckDetail(true)
  setinvoceData([]);
  const { data, error } = await supabase.from('orders').select().eq("orderno",x);
  if (data?.length === 0) {
    toast.info("لايوجد حركة للحساب");
  } else {
    setinvoceData(data);
    setinvoceTitle({"no":x,"date":d})
  } 
}



useEffect(() => {
  setLoading(true)
  fechdata()
  setLoading(false)
}, [])


  return (
    <>
    
      <Box sx={{ color: "green", width: "100%", p: 1 }}>
        <Typography fontFamily={"NX"}>كشف حساب</Typography>
        <Box sx={{ width: "100%" }}>
          <Table>
            <TableHead>
              <tr>
                <TableH>التاريخ</TableH>
                <TableH>#</TableH>
                <TableH>الاجمالي</TableH>
                <TableH>الحالة</TableH>
                <TableH>التفاصيل</TableH>
              </tr>
            </TableHead>
            <tbody>
              {statment.map((el) => {
                return (
                  <React.Fragment key={el.id}>
                    <tr>
                      <TableData>{FORMATDATE(el.created_at)}</TableData>
                      <TableData>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Typography>{el.orderno}</Typography>
                        </Box>
                      </TableData>
                      <TableData>{el.total}</TableData>
                      <TableData>{el.sts}</TableData>
                      <TableData>
                        <Button
                          variant="outlined"
                          color="secondary"
                          sx={{ minWidth: 0 }}
                          onClick={() =>
                            handleCheck(el.orderno, FORMATDATE(el.created_at))
                          }
                        >
                          <TbListDetails />
                        </Button>
                      </TableData>
                    </tr>
                  </React.Fragment>
                );
              })}
              
            </tbody>
          
          </Table>
          {checkDetail && (
            <DiloagShow
              open={checkDetail}
              toggle={setCheckDetail}
              title={
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center" ,color:"white",width:"100%",p:1}}>
                  <Typography># {invoceTitle.no} #</Typography>
                  <Typography>{invoceTitle.date}</Typography>
                </Box>
              }
            >
              <GetDetail data={invoceData} />
            </DiloagShow>
          )}
          {loading && <ImageLoader color='blue'/>}
        </Box>
      </Box>
    </>
  );
}

export default Statments


const GetDetail = ({data}) => {
 
  

  return (
    <>
      <Box  sx={{width:"100%",p:1}}>
        <Table>
            <TableHead>
              <tr>
                <TableH>اسم الصنف</TableH>
                <TableH>السعر </TableH>
                <TableH>الكمية</TableH>
                <TableH>الاجمالي</TableH>
              </tr>
            </TableHead>
            <tbody>
              {data.map((el) => {
                return (
                  <React.Fragment key={el.id}>
                    <tr>
                      <TableData>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Typography
                            fontFamily={"NX"}
                            textAlign={"right"}
                            width={"100%"}
                            p={1}
                          >
                            {getItemName(el.productid)}
                          </Typography>
                        </Box>
                      </TableData>
                      <TableData>{el.price}</TableData>
                      <TableData>{el.qty}</TableData>
                      <TableData>{(el.qty*el.price)}</TableData>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </Table>
       </Box>
    </>
  );
};


 


 

