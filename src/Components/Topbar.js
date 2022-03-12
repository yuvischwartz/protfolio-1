import React from 'react'
import '../App.css'
import {useState, useEffect} from 'react';

function Topbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }

  return (
  <>
      {click && <div className={'hidden sm:inline-block w-screen h-9 bg-stone-400 text-sm text-center relative '}>
        <div className={'topbar absolute'}>
          <h1 className={'text-white pt-2'}>WE SHIP PLASTIC FREE & CARBON NEUTRAL ON EVERY ORDER</h1>
        </div>
        <div className={'absolute right-6'}>
          <i onClick={handleClick} className={"fa-solid fa-xmark text-lg pt-1 text-stone-500 cursor-pointer"}></i></div>
      </div>}
      {!click && <div className={'hidden sm:inline-block w-screen h-9 bg-stone-50 text-sm text-center relative '}>
        <div className={'absolute right-6 text-lg pt-1 text-stone-500 cursor-pointer'}>
          <i onClick={handleClick} className={'fa-solid fa-caret-down'}></i></div>
      </div>}
  </>
  )
}

export default Topbar
