import React from 'react'

function Button(props) {
    
    let buttonClassName = `text-center font-semibold hover:bg-stone-400 hover:text-white text-stone-400 px-6 py-3 border-solid border-2 
    border-stone-400 ${props.buttonSize}`

    return (
    <div>
        <button onClick={props.handleClick} className={buttonClassName}>{props.buttonText}</button>
    </div>
  )
}

export default Button
