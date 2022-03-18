import React from 'react'
import Footer from './Components/Footer'
import PageTitle from './Components/PageTitle'
import TextSection2 from './Components/TextSection2'
import WhiteTextSection from './Components/WhiteTextSection'

function Visit() {
  return (
    <div>
      <PageTitle title={'Visit Us'} />
      <div className={'mx-5 sm:mx-10'}>
      <div className={'h-96 bg-stone-200 sm:h-auto sm:bg-white'}>
      <TextSection2 title={'Our Facilities'} imageName1={'image-9h'}
        p1={'Holladay friends our retail location is open for in-store shopping. We are'}
        p2={'delighted to offer a safe, personalized shopping experience. Call/text or'}
          p3={'schedule your appointment online. We also offer no contact local deliveries'} p4={'on Mondays.'} />
        </div>
        <img  
            className = {'sm:hidden h-96'}  
            alt='img'
            src={'images/image-9h.jpg'}
            />

      <div className={'bg-white h-2/6 sm:h-96 mx-10'}>
      <WhiteTextSection text={'We curate beautiful products from small-batch artisans,'} 
          text2={'local farmers and creatives to bring you ethical products you can trust'}buttonText={'OUR STORY'} costumeClass={'mt-56'}/>

      </div>  
      </div>
   
       
        
        <Footer />
    </div>
  )
}

export default Visit
