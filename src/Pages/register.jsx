import React from 'react'
import Pattern from '../Assets/triangles.png'
import PecanasTree from '../Assets/pecanstree2.jpg'
import RegisterForm from '../Components/registerForm.jsx'



export const Register= () => {

  return (
    <>
    <div>
      <div className="absolute rounded-lg mt-[30px] ml-[35px] border-solid border-2 w-[1200px] h-[500px] ">
        <div className=" w-[500px] h-[500px] ">
          <img src={Pattern} alt="Background Pecs" className=' rounded-l-lg w-full h-[498px]'/>
          <RegisterForm/>
        </div>
        <div className="absoulte rounded-r-lg -mt-[500px] ml-[500px] w-[698px] h-[500px] ">
          <img src={PecanasTree} alt="Background Pecs" className='w-full h-[498px]'/> 
        </div>
      </div>
    </div>
    </>
  )
}
