import React from 'react'
import '../App.css'
import {useState, useEffect} from 'react';

function Topbar() {
  // const [click, setClick] = click = true;

  // const handleClick = () => setClick(!click);
  return (
  <>
    <div className={'hidden lg:inline-block w-screen h-9 bg-stone-400 text-sm text-center relative '}>
      <div className={'topbar absolute'}>
          <h1 className={'text-white pt-2'}>WE SHIP PLASTIC FREE & CARBON NEUTRAL ON EVERY ORDER</h1>
      </div>
      <div className={'absolute right-6'}>
        <button><i className={"fa-solid fa-xmark text-lg pt-1 text-stone-500 cursor-pointer"}></i></button></div>
      </div>
  </>
  )
}

export default Topbar
