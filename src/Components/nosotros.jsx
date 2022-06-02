import React from 'react'
import pecanTree from '../Assets/pecantree.png'

const Nosotros = () => {
  return (
    <>
    <div className='block mb-24 ml-[-30px] '>
        <h3 className=' mt-[40px]  lg:mt-[1150px] text-center text-3xl font-bold'>¿Quiénes Somos?</h3>
        <div className='grid grid-rows-2 md:grid-cols-2 '>
          <div className='flex justify-center'>
            <img src={pecanTree} alt="Pecan tree Peru " className=' mt-10 pl-10 pr-3 lg:h-[500px] w-[800px] rounded-3xl'/>
          </div>
          <div className='flex justify-center pl-5 '>
            <p className='absolute text-center w-[420px] font-bold lg:mt-[200px] lg:ml-[865px] text-xl pl-8 pr-5 py-10 rounded-lg shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600'>Somos una  tienda online de productos  hechos  con pecana, nuestros productos son y están  hechos con pecanas sin  pesticidas, ni conservantes para que 
            disfrutes  de un producto 100% natural Entre los procutos que tenemos son pecanas peladas y sin pelar, además de  dulces de pecana como tejas, chocotejas, galletas de pecana y mucho más  próximamente </p>
            <span class="absolute bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-[380px] mr-[200px] mb-2 lg:-mt-10 lg:ml-[900px]">#Sinpesticidas</span>
            <span class="absolute bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-[380px] ml-[250px] mb-2 lg:-mt-10 lg:ml-[1025px]">#Pecanas</span>
            <span class="absolute bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-[380px] ml-[50px] mr-2 mb-2 -lg:mt-10 lg:ml-[1120px]">#100natural</span>
        </div>
        </div>
    </div>
    </>
  )
}

export default Nosotros