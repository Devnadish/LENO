import React,{Suspense,lazy} from 'react'
import {Routes, Route } from "react-router-dom";
import Loader from "../loader/Loader"
const Home=lazy(()=>import("../../pages/home/Home"))
const Grap=lazy(()=>import("../../pages/grap/Grap"))
const Crumb=lazy(()=>import("../../pages/crumb/Crumb"))
const Backary=lazy(()=>import("../../pages/backary/Backary"))
const Frozen=lazy(()=>import("../../pages/frozen/Frozen"))
const Order=lazy(()=>import("../../pages/order/Order"))
const Register=lazy(()=>import("../../compnent/login/Register"))
const CommentPage=lazy(()=>import("../comments/CmmentPage"))
const Statment =lazy(()=>import("../../pages/statment/Statments"))
const NewPassword =lazy(()=>import("../login/NewPassword"))

function MyRoutes() {
  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/grap" element={<Grap/>} />
        <Route path="/crumb" element={<Crumb/>} />
        <Route path="/backary" element={<Backary/>} />
        <Route path="/frozen" element={<Frozen />} />
        <Route path="/Order/:id" element={<Order />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/commentpage" element={<CommentPage  />} />
        <Route path="/statment" element={<Statment  />} />
        <Route path="/newpassword" element={<NewPassword  />} />
        
        
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Route>
    </Routes>
  </Suspense>
  )
}

export default MyRoutes
