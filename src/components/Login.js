import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignINForm, setIsSignINForm] = useState(true);

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
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignINForm ? 'Sign IN' : 'Sign UP'}</h1>
                {!isSignINForm && (<input type='text' placeholder='full Name' className='p-4 my-4 w-full bg-gray-700' />)}

                <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignINForm ? 'Sign IN' : 'Sign UP'}</button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignINForm ? ' New to Netflix? Sign Up Now' : 'Already registered signin now!!'}
                </p>

            </form>
        </div>
    )
}

export default Login;