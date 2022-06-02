import React from 'react'
import Pattern from '../Assets/triangles.png'

const Footer = ()=> {
  return (
    <>
    <div className='block mb-[-100px]'>
      <img src={Pattern} alt="Background pecs" className='h-14 w-screen'/>
      <p className=' -mt-10 text-white text-center'>Todos los derechos reservados Pecs</p>
    </div>
    </>
  )
}

export default Footer