import React from 'react'
import Header from '../component/Header'
import Details from '../component/Details'
import Footer from '../component/Footer'

const ProductDetails = () => {
  return (
    <div style={{backgroundColor: "#ddf0c7"}}>
      <Header backCol={"#3b444b"} />
      <Details />
      <Footer />
    </div>
  )
}

export default ProductDetails