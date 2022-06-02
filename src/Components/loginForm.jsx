import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { authenticateUser } from "../Redux/User/authActions";
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  let navigate = useNavigate();
  const [error, setError] = useState();
  const [show, setShow] = useState(true);

  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  const credentialChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const dispatch = useDispatch();

  const validateUser = (e) => {
    e.preventDefault();
    dispatch(authenticateUser(user.email, user.password))
      .then((response) => {
        console.log(response.data);
        return navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
        setShow(true);
        resetLoginForm();
        setError("Invalid email and password");
      });
  };

  const resetLoginForm = () => {
    setUser(initialState);
  };
  return (
    <>
    <div className="absolute w-[400px] bg-white rounded-lg shadow-md -mt-[487px] ml-[45px] p-10">

            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Login
            </h2>

            <form className="mt-10" onSubmit={validateUser}>
                <label for="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                <input id="email" type="email" name="email" placeholder="e-mail address" autocomplete="email"
                    className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required 
                    onChange={credentialChange}/>

                <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                <input id="password" type="password" name="password" placeholder="password" autocomplete="current-password"
                    className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required 
                    onChange={credentialChange}/>

                <button type="submit"
                    className="w-full py-3 mt-10 bg-gradient-to-r from-amber-200 via-amber-300 via-amber-400 via-amber-500 via-amber-600 to-amber-700 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:shadow-none">
                    Login
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

export default LoginForm