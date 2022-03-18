import React from 'react'
import Footer from './Components/Footer'
import PageTitle from './Components/PageTitle'
import Products from './Components/Products'
import { useEffect } from 'react'

function Blog() {
  useEffect(()=>{window.scrollTo(0, 0);},[])
  return (
    <>
    <div className={'mb-20'}>
        <PageTitle title={'Our Blog Posts'} />
        <div className={'my-20'}>
          <Products imageName1={'image-1'} imageName2={'image-4'} imageName3={'image-3'} imageName4={'image-2'} />
        </div>
        <div className={'my-20'}>
        <Products imageName1={'image-1'} imageName2={'image-4'} imageName3={'image-3'} imageName4={'image-2'} />
        </div>
          
    </div>
    <Footer/>
    </>
  )
}

export default Blog
