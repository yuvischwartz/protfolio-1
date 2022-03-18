import React from 'react'
import Footer from './Components/Footer'
import TextSection from './Components/TextSection'
import TextSection2 from './Components/TextSection2'
import WhiteTextSection from './Components/WhiteTextSection'
import { useEffect } from 'react'
// import PageTitle from './Components/PageTitle'

function About() {
  useEffect(()=>{window.scrollTo(0, 0);},[])
  return (
    <>
      {/* <PageTitle title={'About Us'}/> */}
      <div className={'mx-5 sm:mx-10'}>
          <div className={'h-96 bg-stone-200 sm:h-auto sm:bg-white'}>
              <TextSection title={'About Us'} p1={'We offer alternative solutions to the community by providing sustainable '}
              p2={'options for a closed loop, circular economy. We partner and align ourselves'}
              p3={'with like minded artisans and farmers to support local economies and'}
            p4={'families. The result is less pollution, less landfill waste and a more '} />
          </div>
          <img  
            className = {'sm:hidden h-96'}  
            alt='img'
            src={'images/image-17h.jpg'}
            />
          <h2 className={'text-center mt-20 logo2 text-xl font-semibold'}>Our Story</h2>
          <p className={'text-sm text-center'}>As a mother I became frustrated at the lack of options available in my</p>
          <p className={'text-sm text-center'}>community to live more sustainably, true to my values and have the healthy lifestyle I wanted for my family. </p>
          <p className={'text-sm text-center'}>I thought “there has to be a better way” than this constant plastic, huge carbon footprint of consumption. </p> 
          <p className={'text-sm text-center'}>the health of my family through what I clean my home with,</p>
          <div className={'flex justify-center'}>
          <img  
            className = {'h-96'}  
            alt='img'
            src={'images/logo.jpg'}
            />
        </div>
        
        </div>
          
        <WhiteTextSection text={'We believe in making a difference through decisions we '} text2={'buy for the home'} buttonText={'Start Shopping'}
        costumeClass={'bg-white pt-40 sm:mx-0 mx-5'} />
      
        <Footer /> 
      
      </>
  )
}

export default About
