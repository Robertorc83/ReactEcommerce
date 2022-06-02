import React from 'react'
import Pattern from '../Assets/triangles.png'
import { Link } from 'react-router-dom'

const Menu =() =>  {
  return (
    <React.Fragment>
    <div className=" absolute pt-10 pl-20" >
        <img src={Pattern} alt="Pecan Ecommerce Background" className='flex-1 w-96 h-10 rounded-lg sm' />
        <div class="lg:hidden">
			    <button class="navbar-burger flex items-center text-blue-600 p-3">
				  <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				  </svg>
			    </button>
		    </div>
        <div className="absolute -mt-8 pl-15 ">
        <Link to="/home" className="px-3 mr-3 ml-9 text-stone-50 font-semibold">INICIO</Link>
        <Link to="/home#productos" className="px-3 mr-3 text-stone-50 font-semibold">PRODUCTOS</Link>
        <Link to="/contact" className="px-3 mr-3 text-stone-50 font-semibold">CONTACTO</Link>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Menu