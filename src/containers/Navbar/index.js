import React, { useContext} from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user'
import './style.css'
export default function Navbar() {
    const [user, setUser] = useContext(UserContext);
    return(
        <div className="navbar">
        <p>ReactSocio</p>    
        {console.log(user)}
        {user ? <img src={user.photoURL} className="userPic" alt="userProfile"/>:<SignInBtn/>}
        
        </div>
    )
}
