import React, { useState, useEffect }from 'react'
import Pattern from '../Assets/triangles.png'
import { connect } from 'react-redux';


const Carrito = ({cart}) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);


  return (
    <>
    <div className="h-screen">
    <img src={Pattern} alt="Background Pecs" className='absolute h-screen w-full'/>
    <div className="absolute mt-8 ml-[130px]">
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
            <div className="md:flex ">
                <div className="col-span-2 p-5 w-[700px] h-[400px]">
                    <h1 className="text-xl font-medium ">Shopping Cart</h1>
                    {cart.map((item) => (
                    <div className="flex justify-between items-center mt-6 pt-6">
                        <div className="flex items-center"> 
                            <img src="https://i.imgur.com/EEguU02.jpg" width="60" className="rounded-full "/>
                                <div className="flex flex-col ml-3"> 
                                    <span className="md:text-md font-medium">{item.title}</span> 
                                    <span className="text-xs font-light text-gray-400">{item.id}</span> 
                                </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="pr-8 flex "> 
                                <button  className="remove">-</button>
                                <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" /> 
                                 <button  className="remove">+</button> 
                            </div>
                            <div className="pr-8 "> 
                                <span className="text-xs font-medium">${totalPrice}</span> 
                            </div>
                            <div> 
                                <i className="fa fa-close text-xs font-medium"></i> 
                            </div>
                        </div>   
                    </div>
                     ))}
                    
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                        <div className="flex items-center"> <i className="fa fa-arrow-left text-sm pr-2">
                            </i> <span className="text-md font-medium text-blue-500">Continue Shopping</span> 
                        </div>
                            <div className="flex justify-center items-end"> 
                            <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span className="text-lg font-bold text-gray-800 "> $24.90</span> 
                        </div>
                    </div>
                </div>
               
                <div className=" p-5 mt-6 m-6 bg-gray-800 h-[350px] w-[300px] rounded overflow-visible"> <span className="text-xl font-medium text-gray-100 block pb-3">Card Details</span>
                    <div className="flex justify-center flex-col pt-3"> 
                        <label className="text-xs text-gray-400 ">Name on Card</label> 
                        <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Giga Tamarashvili"/> 
                    </div>
                    <div className="flex justify-center flex-col pt-3"> 
                        <label className="text-xs text-gray-400 ">Card Number</label> 
                        <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="**** **** **** ****"/> 
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                        <div className="col-span-2 "> 
                            <label className="text-xs text-gray-400">Expiration Date</label>
                            <div className="grid grid-cols-2 gap-2"> 
                                <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm"/> 
                                <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="yyyy"/> 
                            </div>
                        </div>
                        <div className=""> 
                            <label className="text-xs text-gray-400">CVV</label> 
                            <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX"/> </div>
                        </div> 
                    <button className="mt-5 h-12 w-full bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 rounded focus:outline-none text-white ">Check Out</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Carrito);

 
