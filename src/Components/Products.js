import React from 'react'

function Products(props) {
  return (
    <>
      <div className={'flex flex-col sm:flex-row flex-center mx-10'}>
      <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72 m-5'}  
                alt='img'
                src={`images/${props.imageName2}.jpg`}
        />
        <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72 m-5'}  
                alt='img'
                src={`images/${props.imageName2}.jpg`}
        />
        <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72 m-5'}  
                alt='img'
                src={`images/${props.imageName2}.jpg`}
        />
        <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72 m-5'}  
                alt='img'
                src={`images/${props.imageName2}.jpg`}
                 />
      </div>
    </>
  )
}

export default Products
