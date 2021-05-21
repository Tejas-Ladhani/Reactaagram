import React from 'react'
import { SignInBtn } from '../../components'
import './style.css'
export default function CreatePost() {
    return (
        <div className="createPost">
            <SignInBtn/>
            <p style={{paddingLeft:'10px'}}> to post and Create </p>
        </div>
    )
}
