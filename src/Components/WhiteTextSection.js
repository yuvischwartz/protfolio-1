import React from 'react'
import Button from './Button'


function WhiteTextSection(props) {
  return (
    <div className={`h-2/6 sm:h-3/6 ${props.costumeClass}`}>
          <h1 className={'logo2 text-xl sm:text-2xl text-center'}>{props.text}</h1>
          <h2 className={'logo2 text-xl sm:text-2xl text-center'}>{props.text2}</h2>
        <div className={'text-center m-5'}><Button buttonText={props.buttonText} /></div>
    </div>
  )
}

export default WhiteTextSection
