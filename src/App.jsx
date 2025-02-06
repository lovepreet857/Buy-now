
import React from "react"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Card from "./pages/card"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
    <BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/card" element={<Card/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
