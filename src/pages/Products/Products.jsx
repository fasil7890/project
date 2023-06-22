import React from 'react'
import "./Products.css"
import Header from './header'
import Footer from './footer'
import MainContent from './MainContent'

function Products() {
  return (
    <div className="container">
    <Header />
    <MainContent />
    <Footer />
  </div>
  )
}

export default Products