import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from '../utils/userSlice';
import {Logo} from "./../utils/constant";
import { toggleGptSearchView } from '../utils/gptSlice';



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            //navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    };
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
            })
        );
        navigate('/browse')
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate('/')
              // ...
            }
          });
          //this unsubscribe will be called when component is unmount
          return ()=> unsubscribe();
    },[])


    const handleGptSearchClick =()=>{
        //Toggle GPT search
        dispatch(toggleGptSearchView());
    }
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between' >
            
            <img className='w-40 rounded-lg'
                src={Logo}
                alt='logo' />
             {user && (   
            <div className='flex p-2'>
                <select>
                    <option value="en">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Spanish</option>
                </select>
                <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
                <img className='w-12 h-12'
                    alt="usericon" src={user?.photoURL} />
                <button className='font-bold text-2xl' onClick={handleSignOut}>Sign Out</button>
            </div>
             )}
        </div>

    )
}

export default Header;