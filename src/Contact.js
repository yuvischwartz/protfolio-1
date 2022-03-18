import React from 'react'
import Button from './Components/Button'
import Footer from './Components/Footer'
import PageTitle from './Components/PageTitle'
import {useState , useEffect} from 'react'; 

function Contact() {
  const [click, setClick] = useState(false);
  useEffect(()=>{window.scrollTo(0, 0);},[])
  
  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }
  return (
    <>
    <div>
    {/* <PageTitle title={'Contact Us'} /> */}
      <div class="w-full">
          <div class="bg-gradient-to-b from-yellow-200 to-yellow-50 h-96"></div>
          
          <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            {click && <div className={'bg-white w-full shadow rounded p-8 sm:p-12 -mt-72 flex justify-center flex-col h-96'}>
              
              <p className={'text-center logo'}>Thank you!</p>
              <p className={'text-center logo'}>Your message got submited</p>
              <span className={'text-center m-10'}><Button buttonText={'Go Back'} handleClick={handleClick}/></span>
            </div>}
            {!click && 
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
              <h1 className={"logo2 text-3xl font-bold leading-7 text-center"}>Contact Us</h1>
            <form action="" method="post">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none logo">Name</label>
                        <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none logo">Email</label>
                        <input type="email" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none logo">Subject</label>
                        <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none logo">Message</label>
                        <textarea type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    {/* <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Send message
                    </button> */}
                  <div className={'mt-9 font-semibold leading-none'}><Button buttonText={'Send Message'} handleClick={handleClick} /></div>
                </div>
            </form>
        </div>}
    </div>
</div>
      <Footer />
    </div>
    </>
    
  )
}

export default Contact
