import React from 'react'
import Button from './Components/Button'
import Footer from './Components/Footer'
import InstaSection from './Components/InstaSection'
import ShopSection from './Components/ShopSection'
import TextSection from './Components/TextSection'

function WorkShops() {
    return (
        <>
            <div className={'sm:mx-10'}>
                <div className={'mx-5 h-96 bg-stone-200 sm:h-auto sm:bg-white'}>
                <TextSection title={'About Our WorkShops'} p1={'We offer alternative solutions to the community by providing sustainable '}
                p2={'options for a closed loop, circular economy. We partner and align ourselves'}
                p3={'with like minded artisans and farmers to support local economies and'}
                        p4={'families. The result is less pollution, less landfill waste and a more '} />
                    </div>
                

<h2 className={'text-center m-5 logo2 text-xl font-semibold'}>Handmade Soap Making</h2>
          <p className={'text-sm text-center'}>A half day introduction to handmade soapmaking, and six Saturday Afternoon Soap Making Seminars</p>
          <p className={'text-sm text-center'}>on various soapmaking topics. Saturday Soap Seminars are scheduled 1-4 pm </p>
          <p className={'text-sm text-center'}>on the first Saturday of each month, May through October.</p> 
          <p className={'text-sm text-center'}>All soapmaking classes are hands-on soapmaking classes as your soapmaking journey progresses.</p>
                <div className={'text-center'}><Button buttonText={'Learn More'} buttonSize={'text-lg m-5'} /></div>
                {/* <InstaSection titleText={'Pictures from previous workshops:'}
                    imageName1={'image-11'}
                    imageName2={'image-13'}
                    imageName3={'image-8h'}
                    imageName4={'image-10h'}/> */}
                <ShopSection imageName1={'image-12'} imageName2={'image-14'} imageName3={'image-15'} imageName4={'image-13'}/>
            </div>
            <Footer/>
        </>
  )
}

export default WorkShops
