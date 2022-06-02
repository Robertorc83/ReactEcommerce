import React from 'react'
import ContactForm from '../Components/contactForm'
import Menu from '../Components/menu'
import TagCarrito from '../Components/tagCarrito'
import Pattern from '../Assets/triangles.png'

function Contact() {
  return (
    <>  
        <div className="flex absolute w-[100vw] h-[500px] ">
          <img src={Pattern} alt="Background Pecs" className=' rounded-l-lg w-full h-[698px]'/>
          <Menu/>
            <TagCarrito/>
            <ContactForm/>
        </div>    
    </>
  )
}

export default Contact