import React from 'react'
import Button from './Components/Button'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import InstaSection from './Components/InstaSection'
import Navbar from './Components/Navbar'
import ShopSection from './Components/ShopSection'
import TextSection from './Components/TextSection'
import TextSection2 from './Components/TextSection2'
import Topbar from './Components/Topbar'
import WhiteTextSection from './Components/WhiteTextSection'
// import img1 from '../public/Images/image-1.jpg';

function Home() {
  return (
  <>
    <div className={'h-full bg-stone-50 m-0'}>
        <HeroSection />
        <WhiteTextSection text={'Better products for a sustainable, non-toxic home'} buttonText={'SHOP ALL'} costumeClass={'bg-stone-50'}/>
        <ShopSection imageName1={'image-12'} imageName2={'image-14'} imageName3={'image-15'} imageName4={'image-13'}/>
        <TextSection/>
        <WhiteTextSection text={'We curate beautiful products from small-batch artisans,'} 
          text2={'local farmers and creatives to bring you ethical products you can trust'}buttonText={'OUR STORY'} costumeClass={'bg-white mt-60'}/>
        <TextSection2 />
        <InstaSection
          titleText={'Follow along @cultivatemarkets'}
          imageName1={'image-11'}
          imageName2={'image-13'}
          imageName3={'image-8h'}
          imageName4={'image-10h'}/>
        <Footer/>
      </div>
      </>
  )
}

export default Home
{/* <img  
      className = {'h-4/6 '}  
      alt='img'
      src={'images/image-1.jpg'}
        /> */}
        // grid grid-rows-2 grid-cols-2