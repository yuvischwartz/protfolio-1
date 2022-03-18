import React from 'react'
import Footer from './Components/Footer'
import InstaSection from './Components/InstaSection'
import PageTitle from './Components/PageTitle'

function Gift() {
  return (
    <>
      <div className={'mb-40'}>
          <PageTitle title={'Shop Our Gifts Basket'} />

          <InstaSection
          titleText={'Spacial For Holidays'} 
          imageName1={'image-11'}
          imageName2={'image-13'}
          imageName3={'image-8h'}
              imageName4={'image-10h'} />
          <InstaSection
          titleText={'Valentines gifts'}
          imageName1={'image-11'}
          imageName2={'image-13'}
            imageName3={'image-8h'}
            imageName4={'image-9h'}
          />
          <InstaSection
          titleText={'Flowers'}
          imageName1={'image-11'}
          imageName2={'image-13'}
              imageName3={'image-8h'}
              imageName4={'image-11'}
      />
      
    </div>
    <Footer/>
    </>
  )
}

export default Gift

          {/* <h2 className={'text-left ml-10 logo2 text-lg font-semibold'}>The Story Behind Out Baskets</h2>
          <p className={'text-sm text-left ml-10 '}>As a mother I became frustrated at the lack of options available in my</p>
          <p className={'text-sm text-left ml-10 '}>community to live more sustainably, true to my values and have the healthy lifestyle I wanted for my family. </p>
          <p className={'text-sm text-left ml-10 '}>I thought “there has to be a better way” than this constant plastic, huge carbon footprint of consumption. </p>  */}