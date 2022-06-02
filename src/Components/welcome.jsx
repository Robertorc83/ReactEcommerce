import React from 'react'
import PecanTable from '../Assets/pecantable.png'
import Pecans from '../Assets/pecan5.jpg'
import Pattern from '../Assets/triangles.png'


const Welcome = () => {
  return (
    <>
        <div className=''>
          <div>
            <div  className='flex'>
                <img src={PecanTable} alt="Pecan Welcome Portrait " className='flex w-full mt-[-10px] h-[300px] md:w-[50%] shadow-2xl lg:h-[400px] lg:w-[650px] ' />
            </div>
            <div className='flex justify-end'>
                <img src={Pecans} alt="Pecan Welcome Portrait " className=' hidden rounded shadow-2xl md:flex h-[296px] -mt-[295px] md:w-[50%] lg:flex absolute lg:h-[395px] w-[650px] lg:-mt-[395px] xl:flex absolute  ' />
            </div>
          </div>
            <div >
            <img src={Pattern} alt="Pecan Welcome Portrait" className='h-16 w-screen'/>
            <p className=' text-xl text-white text-center -m-16 p-0 font-bold ml-[5%] w-[90%] lg:text-3xl '>PECANAS SIN PESTICIDAS AL MEJOR PRECIO</p>
            </div>
        </div>
    </>
  )
}

export default Welcome