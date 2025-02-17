
import React from "react"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import Home from "../src/pages/Home"
import Card from "./pages/Card"
import Help_Center from "./pages/Help_Center"
import Touch from "./pages/touch"
import Topdetail from "./pages/Topdetail"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/card" element={<Card/>}/>
  <Route path="/help_canter" element={<Help_Center/>}/>
  <Route path="/touch" element={<Touch/>}/>
  <Route path="/topdetail" element={<Topdetail/>}/>
   

</Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
