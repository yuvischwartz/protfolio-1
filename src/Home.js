import React from 'react'
import Button from './Components/Button'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import InstaSection from './Components/InstaSection'
import MobileViewFooter from './Components/MobileViewFooter'
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
        <TextSection title={'Our Refill Bar'} p1={'Our refill bar offers a variety of organic, natural products. Simply bring in'}
          p2={'your empty, clean container and refill from our selection. By shopping in bulk '}
          p3={'you save money by reducing waste and support local small businesses.'}/>
        <WhiteTextSection text={'We curate beautiful products from small-batch artisans,'} 
          text2={'local farmers and creatives to bring you ethical products you can trust'}buttonText={'OUR STORY'} costumeClass={'bg-white mt-60'}/>
        <TextSection2 title={'Come Visit Us'} imageName1={'image-9h'}
          p1={'Holladay friends our retail location is open for in-store shopping. We are'}
          p2={'delighted to offer a safe, personalized shopping experience. Call/text or'}
          p3={'schedule your appointment online. We also offer no contact local deliveries'} p4={'on Mondays.'} />
        <div className={'h-4/6 sm:h-screen bg-white'}>
        <InstaSection
          titleText={'Follow along @cultivatemarkets'}
          imageName1={'image-11'}
          imageName2={'image-13'}
          imageName3={'image-8h'}
          imageName4={'image-10h'} />
        </div>
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