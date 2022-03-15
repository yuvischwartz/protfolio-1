import React from 'react'
import Button from './Components/Button'
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
        <ShopSection/>
        <TextSection/>
        <WhiteTextSection text={'We curate beautiful products from small-batch artisans,'} 
          text2={'local farmers and creatives to bring you ethical products you can trust'}buttonText={'OUR STORY'} costumeClass={'bg-white mt-60'}/>
        <TextSection2/>
        {/* <div className={'bg-stone-200 h-5/6 flex flex-row'}>
            <div className={' w-1/2'}>
              1
            </div>
            <div className={'bg-white w-1/2'}>
              2
            </div>
        </div> */}

        <InstaSection />
        <TextSection2/>
      </div>
      {/* <div className={'bg-stone-50 h-screen w-screen mt-0'}>
        <div className={'bg-stone-100 h-3/6'}>
        <h1 className={'logo2 text-2xl text-center'}>Better products for a sustainable, non-toxic home</h1>
        <div className={'text-center m-5'}><Button buttonText={'SHOP ALL'} /></div>
        </div>
      </div> */}
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