import React from 'react'
import Footer from './Components/Footer'
import PageTitle from './Components/PageTitle'
import Products from './Components/Products'
import { useEffect } from 'react'

function Shop() {
  useEffect(()=>{window.scrollTo(0, 0);},[])
  return (
    <>
      <PageTitle title={'Our Products'} />
      <Products imageName1={'image-1'} imageName2={'image-4'} imageName3={'image-3'} imageName4={'image-2'} />
      <Products imageName1={'image-1'} imageName2={'image-4'} imageName3={'image-3'} imageName4={'image-2'} />
      <Products imageName1={'image-1'} imageName2={'image-4'} imageName3={'image-3'} imageName4={'image-2'} />
      <Products imageName1={'image-1'} imageName2={'image-4'} imageName3={'image-3'} imageName4={'image-2'} />
      <Footer/>
    </>
  )
}

export default Shop
