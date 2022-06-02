import React from 'react'
import { StarsRating } from './starsRating';
import { connect } from "react-redux";
import {addToCart} from "../Redux/Shopping/shoppingActions.js";
import { Link } from 'react-router-dom';

const CardProducto = ({styles, link, textButton1, image, imageStyle,buttonPos1, buttonPos2, product,addToCart}) =>{
    
    return (

    <div className={styles}>
      <div className='flex justify-center'>
        <button onClick={() => addToCart(product.id)} className='absolute bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 mt-10 mb-10 py-2 px-5 rounded text-white border-white lg:w-full mt-[-50px]' >Añadir al carrito</button>
      </div>
      <div className={buttonPos1}>
        <p className='mt-2 mb-10 ml-[105px] bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500 text-xl '>{textButton1}</p>
      </div>
      <img src={image} className={imageStyle}/>
      <StarsRating/>
      <div className={buttonPos2}>
        <Link to={link} className='absolute text-center bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 mt-10 mb-10 py-2 px-5 rounded text-white border-white lg:w-full' >VER PRODUCTO</Link>
      </div>
    </div>
    )
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(CardProducto);