import React from 'react'
import Pattern from '../Assets/triangles.png'
import PecanasL from '../Assets/pecanaslogin.jpeg'
import  LoginForm  from '../Components/loginForm.jsx'

export const Login = () => {
  
  return (
    <>
    <div>
      <div className="absolute rounded-lg mt-[60px] ml-[100px] border-solid border-2 w-[1200px] h-[500px] ">
        <div className=" w-[500px] h-[500px] ">
          <img src={Pattern} alt="Background Pecs" className=' rounded-l-lg w-full h-[498px]'/>
          <LoginForm/>
        </div>
        <div className="absoulte rounded-r-lg -mt-[500px] ml-[500px] w-[698px] h-[500px] ">
          <img src={PecanasL} alt="Background Pecs" className='w-full h-[498px]'/> 
        </div>
      </div>
    </div>
    </>
  )
}
