import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./Home.css";

import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
       <Banner/>
        <Footer/>
    </div>
  )
}

export default Home