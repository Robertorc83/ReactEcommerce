import React from 'react'
import CardProducto from './cardProducto'
import {pecana3} from './productos.jsx'
import {chocotejas} from './productos.jsx'
import {imageStyle2} from './productos.jsx'
import {imageStyle3} from './productos.jsx'
import {button3} from './productos.jsx'
import {but3} from './productos.jsx'
import { Link1, Link2, Link3, link4 } from './productos.jsx'


const card1 = "absolute mt-[15px] ml-[180px] py-10 w-[350px] h-[440px] rounded-2xl border-solid border-1 shadow-xl bg-white"
const card2 = "absolute mt-[15px] ml-[650px] py-10 w-[350px] h-[440px] rounded-2xl border-solid border-1 shadow-xl bg-white"

export const ProductosRelacionados = () => {
  return (
    <>
    <div className='absolute w-[1200px] h-[550px] -mt-[650px] ml-[100px] rounded-3xl'>
            <h2 className='text-white text-3xl text-center font-medium pb-[30px] '>Productos Relacionados</h2>
            <CardProducto link={Link2}styles={card1} imageStyle={imageStyle2} image={pecana3} textButton1="PECANA SIN PELAR"/>
            <CardProducto link={Link3}styles={card2} imageStyle={imageStyle3} image={chocotejas} textButton1="CHOCOTEJAS" buttonPos2={button3} buttonPos1={but3}/>
        </div> 
    </>
  )
}
