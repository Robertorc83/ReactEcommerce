import React from 'react'
import CardProducto from './cardProducto'
import { connect } from "react-redux";

const cardClass1 = " ml-1 mt-[20px] md:ml-[50px] lg:absolute w-[350px] h-[440px] lg:mt-16 lg:ml-[200px] py-10 rounded-2xl border-solid border-1 shadow-xl"
const cardClass2 = " ml-1 mt-[60px] md:mt-[20px]  lg:absolute w-[350px] h-[440px] lg:mt-16 lg:ml-[700px] py-10 rounded-full rounded-2xl border-solid border-1 shadow-xl"
const cardClass3 = " ml-1 mt-[60px] md:ml-[50px] lg:absolute w-[350px] h-[440px] lg:mt-[590px] lg:ml-[200px] py-10 rounded-full rounded-2xl border-solid border-1 shadow-xl"
const cardClass4 = " ml-1 mt-[60px] lg:absolute w-[350px] h-[440px] lg:mt-[590px] lg:ml-[700px] py-10 rounded-2xl border-solid border-1 shadow-xl"

export const imageStyle1="-mt-[25px] ml-16 max-h-60 rounded-2xl object-cover"
export const imageStyle2="-mt-[40px] ml-16 max-h-64 rounded-2xl"
export const imageStyle3="-mt-[20px] ml-10 max-h-52 rounded-2xl"
export const imageStyle4="-mt-[60px] ml-8 max-h-72 rounded-2xl"


export const pecana1 = require('../Assets/pecana1.png')
export const pecana3 = require('../Assets/pecanas31transp.png')
export const tejas = require('../Assets/tejas.png')
export const chocotejas = require('../Assets/chocotejas.png')

export const button3 ="flex justify-center mt-7"
export const button1 ="flex justify-center mt-7 md:mt-0"
export const button4 ="flex justify-center -mt-3 "
export const button2 ="flex justify-center -mt-3 md:mt-0"
export const but3="ml-[10px]"
export const but4="ml-[40px]"

export const Link1 ="/productos/pecanas-con-cascara"
export const Link2 ="/productos/pecanas-peladas"
export const Link3 ="/productos/chocotejas"
export const Link4 ="/productos/tejas"

const Productos =({products})=> {
  return (
    <>
        <div className='block min-h-screen bg-red-500  '>
          <div>
            <h2 className='font-bold text-3xl text-center mt-28 mb-20'>Nuestros Productos</h2>
          </div>
            <div id="productos" className='flex justify-center grid grid-rows-4 md:grid md:grid-cols-2 '>
                <CardProducto link={Link1} product={products[0]} styles={cardClass1} imageStyle={imageStyle1} image={pecana1} buttonPos2={button1} textButton1="PECANA PELADA"/>
                <CardProducto link={Link2} product={products[1]} styles={cardClass2} imageStyle={imageStyle2} image={pecana3} buttonPos2={button2} textButton1="PECANA SIN PELAR"/>
                <CardProducto link={Link3} product={products[2]} styles={cardClass3} imageStyle={imageStyle3} image={chocotejas} textButton1="CHOCOTEJAS" buttonPos2={button3} buttonPos1={but3}/>
                <CardProducto link={Link4} product={products[3]} styles={cardClass4} imageStyle={imageStyle4} image={tejas} textButton1="TEJAS" buttonPos2={button4} buttonPos1={but4}/>
            </div>
        </div>
    </>
  )
} 
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Productos);