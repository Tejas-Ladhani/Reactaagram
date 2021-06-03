import React, { useContext } from 'react'
import { signOut } from '../../services/auth'
import { UserContext } from '../../contexts/user'


import './style.css'
function SignOutBn() {
    const [user, setUser] = useContext(UserContext);
    const signOutBtnClick = async () => { let successFull = await signOut(); if (successFull) setUser(null) }

    return (
        <div className="signOutBtn" onClick={signOutBtnClick}>
            <p>Sign Out</p>
        </div>
    )
}

export default SignOutBn
