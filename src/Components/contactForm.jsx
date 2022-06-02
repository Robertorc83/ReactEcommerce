import React from 'react'


function ContactForm() {
  return (
    <>
    <div className="flex absolute z-5 w-[800px] bg-white rounded-lg shadow-md mt-[130px] ml-[18%] p-10">

            <h2 className=" flex absolute justify-center mb-[20px] w-[90%] font-semibold text-3xl lg:text-4xl text-gray-800">
                Contact Us
            </h2>
            <div className=''>
            <form className="mt-20 w-[720px]" >
                <div className=' flex flex-row'>
                <label for="First Name" className="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
                <input id="First Name" type="text" name="First Name" placeholder="First Name" autocomplete="First Name"
                    className="block w-[350px] py-3 px-1 mt-2 ml-[20px] mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required 
                    />

                <label for="last_name" className="ml-[40px] block mt-2 text-xs font-semibold text-gray-600 uppercase">Last Name</label>
                <input id="last_name" type="text" name="last_name" placeholder="Last Name"
                    className=" block w-[350px] py-3 px-1 mt-2 mb-4 ml-[20px]
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required 
                    />
                </div>
                <label for="email" className=" block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                <input id="email" type="email" name="email" placeholder="E-mail"
                    className="block w-full py-3 px-1 mt-2 mb-4 ml-[20px]
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required 
                    />
                <label for="email" className=" block mt-2 text-xs font-semibold text-gray-600 uppercase">Message</label>
                <textarea id="message" type="message" name="email" placeholder="Your Message"
                    className="block w-full py-3 px-1 mt-2 mb-4 ml-[20px]
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required 
                    />
                <div className='flex justify-center  w-full'>
                <button type="submit"
                    className=" text-center w-full py-3 mt-10 bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:shadow-none">
                    SEND
                </button>
                </div>
            </form>
            </div>
            </div>
    </>
  )
}

export default ContactForm