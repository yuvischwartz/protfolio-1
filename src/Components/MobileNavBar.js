import React from 'react'
import {useState} from 'react'; 
import DropdownMenu from './DropdownMenu';

function MobileNavBar() {

    const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }

  return (
    <>
    <div className={'mobile-view sm:hidden flex justify-center w-screen relative pt-4 bg-stone-50'}>
              <div className={'text-2xl sm:hidden cursor-pointer absolute left-5 text-stone-400 hover:text-stone-500'}><i className={click ? 'hidden':'fa-solid fa-cart-shopping'}></i></div>
        <span className={click ? 'hidden' : 'inline-block'}><h1 className={'logo sm:hidden cursor-pointer text-2xl'}>CULTIVATE MARKET</h1></span>
              <div onClick={handleClick} className={'text-2xl sm:hidden cursor-pointer absolute right-5 text-stone-400 hover:text-stone-500'}>
                  <i  className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
              </div>       
          </div>

          {click && <DropdownMenu/>}
    </>
  )
}

export default MobileNavBar
