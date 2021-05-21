import React, {  useContext } from 'react'
import { signInWithGoogle } from '../../services/auth'
import { UserContext } from '../../contexts/user'
import './style.css'
function SignInBn() {
    const [user, setUser] = useContext(UserContext);
    const signInBtnClick = async () => { let userBySignIn = await signInWithGoogle(); if(userBySignIn) setUser(userBySignIn) }

    return (
        <div className="signInBtn" onClick={signInBtnClick}>
            <p>Sign In with Google</p>
        </div>
    )
}

export default SignInBn
