import React from "react"
import Login from './project/Login'
import Page2 from './project/Page2'
import Home from "./project/Home"
import Payment from "./project/Payment"
import Last from "./project/Last"
import Membership from "./project/Membership"
import Facility from "./project/Facility"
import Contact from "./project/Contact"
import { BrowserRouter,Route,Routes } from "react-router-dom"

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="Page2" element={<Page2/>}></Route>
      <Route path="Home" element={<Home/>}></Route>
      <Route path="Membership" element={<Membership/>}></Route>
      <Route path="Payment" element={<Payment/>}></Route>
      <Route path="Last" element={<Last/>}></Route>
      <Route path="Facility" element={<Facility/>}></Route>
      <Route path="Contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}