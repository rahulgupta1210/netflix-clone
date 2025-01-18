import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignINForm, setIsSignINForm] = useState(true);

    const [errorMessages, seterrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);

    const handleSignIN = () => {
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        console.log(message)
        seterrorMessage(message);
        if (message) return;

        //signin and signup logic
        if (!isSignINForm) {
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user,{
                        displayName: email.current.value,
                        photoURL:'https://avatars.githubusercontent.com/u/27813748?v=4'
                    }).then(()=>{
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(addUser({
                            uid:uid,
                            email:email,
                            displayName:displayName,
                            photoURL:photoURL
                        }))
                    })
                    console.log('user',user);
              navigate('/browse')

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        } else {
            //signin ogic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log('signin user',user);
              navigate('/browse')
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorCode + "-" + errorMessage)
            });
        }
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
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignINForm ? 'Sign IN' : 'Sign UP'}</h1>
                {!isSignINForm && (<input type='text' placeholder='full Name' className='p-2 my-2 w-full bg-gray-700' />)}

                <input type='text' ref={email} placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700' />
                <input type='password' ref={password} placeholder='Password' className='p-2 my-2 w-full bg-gray-700' />
                <button className='p-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleSignIN} >{isSignINForm ? 'Sign IN' : 'Sign UP'}</button>
                <p className='text-red-500 p-2 font-bold'>{errorMessages}</p>
                <p className='py-2 cursor-pointer font-semibold' onClick={toggleSignInForm}>
                    {isSignINForm ? ' New to Netflix? Sign Up Now' : 'Already registered signin now!!'}
                </p>

            </form>
        </div>
    )
}

export default Login;