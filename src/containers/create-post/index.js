import React, { useContext, useState } from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user'
import './style.css'
export default function CreatePost() {
    const [user, setUser] = useContext(UserContext);
    const [caption, setCaption] = useState("")
    const handleChange = () => {

    }

    return (
        <div className="createPost">
            {   user ?
                <div className="createPost_loggedIn">
                    <p>Create Post</p>
                    <div className="createPost_loggedInCenter">
                        <textarea className="createPost_textarea" rows="3" value={caption}
                            onChange={(e) => { setCaption(e.target.value) }}
                        >
                        </textarea>
                    </div>
                    <div>
                        <input type="file" accept="image/*" onChange={handleChange} />
                    </div>
                </div>
                : <>
                    <SignInBtn />
                    <p style={{ paddingLeft: '10px' }}> to post and Create </p>
                </>
            }
        </div>
    )
}
