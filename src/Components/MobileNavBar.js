import React from 'react'
import {useState} from 'react'; 
import DropdownMenu from './DropdownMenu';
import { Routes, Route, Link } from "react-router-dom";

function MobileNavBar() {

    const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }

  return (
    <>
    <div className={'mobile-view sm:hidden flex justify-center w-screen relative pt-6 bg-stone-50 h-px'}>
              <div className={'text-2xl sm:hidden cursor-pointer absolute left-5 text-black hover:text-stone-500'}><i className={click ? 'hidden':'fa-solid fa-cart-shopping'}></i></div>
        <span className={click ? 'hidden' : 'inline-block'}>
          {/* <h1 className={'logo sm:hidden cursor-pointer text-2xl'}>CULTIVATE MARKET</h1> */}
          <Link className={'sm:hidden'} to="/" >
            <h1 className={'logo text-2xl'}>CULTIVATE MARKET</h1>
            <h2 className={'logo2 text-sm col-span-12 pl-6'}>BEAUTIFULY SUSTAINABLE</h2>
        </Link>
        </span>
              <div onClick={handleClick} className={'text-2xl sm:hidden cursor-pointer absolute right-5 text-black hover:text-stone-500'}>
                  <i  className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
              </div>       
          </div>

      {click && <DropdownMenu handleClick={handleClick}/>}
    </>
  )
}

export default MobileNavBar
