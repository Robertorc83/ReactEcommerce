import React, {useState} from 'react'
import axios from 'axios'

const RegisterForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e)
    {
        e.preventDefault();
    try
        {
         await axios.post("http://localhost:8082/user/register", 
        {
        email: email,
        name: "",
        username:"",
        address : "",
        phone : "",
        type: "",
        password :password
        })
        .then(res => console.log(res.data));
          alert("User Registation Successfully");
        
        }
    catch(error)
        {
          alert("User Registation Failed");
          console.log(error.response.headers)
        }
   }
  return (
    <>
    <div className="absolute w-[400px] bg-white rounded-lg shadow-md -mt-[487px] ml-[45px] p-10">

            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Register
            </h2>

            <form className="mt-10" onSubmit={handleSubmit}>
                <label for="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                <input id="email" type="email" name="email" placeholder="e-mail address" autocomplete="email"
                    className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200" 
                    onChange={(event) =>{ setEmail(event.target.value)}}
                    required />

                <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                <input id="password" type="password" name="password" placeholder="password" autocomplete="current-password"
                    className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    onChange={(event) =>{ setPassword(event.target.value)}}
                    required />

                <button type="submit"
                    className="w-full py-3 mt-10 bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:shadow-none">
                    Register free
                </button>

                <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                    <a href="forgot-password" className="flex-2 underline">
                        Forgot password?
                    </a>

                    <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                        or
                    </p>
        
                    <a href="register" className="flex-2 underline">
                        Create an Account
                    </a>
                </div>
            </form>
        </div>
    </>
  )
}

export default RegisterForm