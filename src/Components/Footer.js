import React from 'react'
import Button from './Button'

function Footer() {
    return (
      <>
    <div className={'flex justify-center bg-white h-3/6 w-screen border-double border-stone-400 border-t'}>
        
        <div className={'m-20'}>
              <ul>
                  <li className={'border-b'}>About</li>
                  <li className={'border-b'}>Shop</li>
                  <li className={'border-b'}>Contact Us</li>
                  <li className={'border-b'}>Gift Bag</li>
              </ul> 
        </div>
        <div className={'m-20'}>
            <ul>
                  <li className={'border-b'}>Gift Cards</li>
                  <li className={'border-b'}>Shipping & Returns</li>
                  <li className={'border-b'}>More Info</li>
                  <li className={'border-b'}>More About Us</li>
            </ul> 
        </div>
          <div className={'m-20'}>
              {/* <h1 className={'logo2 text-2xl'}>Natural Self</h1> */}
              <h2 className={'logo text-xl'}>Market Natural</h2>
              <h3 className={'pt-5 logo text-lg'}>join us and receive 10% off your next order</h3> 
              {/* <p className={'text-sm'}>Our policy learn more about it</p> */}
                    <Button buttonText={'Learn More'}/>
          </div>
          <div className={'m-0'}>
            <img  
            className = {'h-5/6'}  
            alt='img'
            src={'images/logo.jpg'}
            />  
          </div>
          
      </div>
      <h3 className={'text-center mb-10 text-sm logo bg-white h-20'}>©2021 CULTIVATE MARKET LLC | CULTIVATE MARKET℠ AND BEAUTIFULLY SUSTAINABLE℠ ARE SERVICE MARKS OF CULTIVATE MARKET LLC</h3>
      
      <div className={'sm:hidden bg-white w-screen h-full border-double border-stone-400 border-t'}>
            
           
                   
            <nav className={'flex justify-center'}>
                    <ul className={'text-md text-center'}>
            <li className={'mr-10'}><img  
            className = {'h-3/6 w-3/6'}  
            alt='img'
            src={'images/logo.jpg'}
            /> </li> 
           
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>About</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Shop</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Contact Us</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Gift Bag</li>  
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Gift Cards</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Shipping & Returns</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>More Info</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>More About Us</li>
            <li><div className={'m-20'}>
              {/* <h1 className={'logo2 text-2xl'}>Natural Self</h1> */}
              <h2 className={'logo text-xl'}>Market Natural</h2>
              <h3 className={'pt-5 logo text-lg'}>join us and receive 10% off your next order</h3> 
              {/* <p className={'text-sm'}>Our policy learn more about it</p> */}
                    <Button buttonText={'Learn More'}/>
            </div></li>
            </ul>
          </nav>   
    </div>
        
    </>
  )
}

export default Footer
