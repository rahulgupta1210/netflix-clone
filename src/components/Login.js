import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidData} from '../utils/validate'

const Login = () => {

    const [isSignINForm, setIsSignINForm] = useState(true);

    const [errorMessages,seterrorMessage] = useState(null)

    const email = useRef(null);
    const password = useRef(null);

    const handleSignIN =()=>{
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(email.current.value,password.current.value);
        console.log(message)
        seterrorMessage(message);
    }

    function toggleSignInForm() {
        setIsSignINForm(!isSignINForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='
https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg'
                    alt='logo' />
            </div>
            <form onSubmit={(e)=> e.preventDefault() } className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignINForm ? 'Sign IN' : 'Sign UP'}</h1>
                {!isSignINForm && (<input type='text' placeholder='full Name' className='p-4 my-4 w-full bg-gray-700' />)}

                <input type='text' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg'onClick={handleSignIN} >{isSignINForm ? 'Sign IN' : 'Sign UP'}</button>
                    <p className='text-red-500 text-lg p-2 font-bold'>{errorMessages}</p>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignINForm ? ' New to Netflix? Sign Up Now' : 'Already registered signin now!!'}
                </p>

            </form>
        </div>
    )
}

export default Login;