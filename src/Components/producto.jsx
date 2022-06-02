import React from 'react'
import Pattern from '../Assets/triangles.png'
import Menu from './menu'
import { useState } from 'react'
import { ProductosRelacionados } from './productosRelacionados'


const Producto = ({image, title, description, price, alt}) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {setCount(count + 1)}
    const handleDecrement = () => {
        if (count>0) {
            {setCount(count - 1)};}
        else { setCount(0) }
    
    }

  return (
    <>
    <div className='h-full pb-0 -mb-0 '>
        <Menu/>
        <img src={Pattern} alt="Background Pecs" className='h-[1500px] '/>
        <div className='absolute w-[1100px] h-full -mt-[1350px] ml-[150px] bg-white rounded-3xl'>
            <div>
                <img src={image} alt={alt} className='w-[320px] h-[320px] mt-[80px] ml-[80px]'/>
            </div>
            <div>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600 text-3xl ml-[100px] -mt-[350px] font-medium  '>{title}</h2>
                <p className='ml-[500px] font-medium mt-[30px] text-xl w-[500px]'> {description}</p>
                <p className='ml-[500px] font-medium mt-[30px] text-xl w-[500px]'> Precio: ${price}/Kg</p>
                <button className='absolute bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 mt-20 mb-10 ml-[662px] py-4 px-7 rounded text-white '>Agregar al Carrito</button>
                <div>
                    <button onClick={handleIncrement} className='absolute bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 mt-[170px] mb-10 ml-[860px] py-2 px-5 rounded text-white border-white'>+</button>
                    <p className='absolute mt-[170px] ml-[735px] text-2xl'>{count} Kg</p>
                    <button onClick={handleDecrement} className='absolute bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 mt-[170px] mb-10 ml-[600px] py-2 px-5 rounded text-white border-white'>-</button>
                </div>
            </div>
        </div> 
        <ProductosRelacionados/>    
    </div>
    </>
  )
  }

export default Producto