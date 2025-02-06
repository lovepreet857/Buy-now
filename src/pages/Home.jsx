import React, { useEffect, useState } from 'react'
import Banner from '../components/home/Banner'
import Watches from '../components/home/Watches'
import Bestselling from '../components/home/Bestselling'
import Featured from '../components/home/Featured'
import featureData from "../json/featured.json"
import RelatedData from "../json/FeaturedCards.json"
import NewArrivals from '../components/home/NewArrivals '
import ArrivalData from "../json/NewArrival.json";
import NewPartnerdata from "../components/home/NewPartners/"
import Newarivalpart from '../components/home/Newarivalpart'
import Bluetooth from '../components/home/Bluetooth'
// import Test from '../components/home/Test'


const Home = () => {
  return (
    <>
      <Banner/>
      <Watches/>
      <Featured data={featureData} Title={"Featured products for you"}/>
      <Bestselling/>
      <NewArrivals Title={"Top products for top brands"} info={'Top brands up to 30% off'} step={"solid"} Data={ArrivalData}/>
        <Newarivalpart/>
        <Bluetooth/>
        
      <Featured data={RelatedData} Title={"Related items for you"}/>
      <NewPartnerdata/>
      
    
    </>
  )
}

export default Home
