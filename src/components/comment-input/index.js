import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user'
import { db } from '../../firebase'
import './style.css'
export default function CommentInput({ id, comments }) {

    const [user, setUser] = useContext(UserContext)
    const [comment, setComment] = useState("")
    const [commentArray, setCommentArray] = useState(comments ? comments : [])

    const addCommentinArray = () => {
        if (comment !== "") {
            commentArray.push({ commentMsg: comment, userId: user.uid, username: user.displayName })
            db.collection('posts').doc(id).update({ comments: commentArray, }).then(() => { setComment("") }).catch((error) => console.log(`Error : ${error}`))
        }
    }

    return (
        <div className="commentInput">
            <textarea className="commentInput__textArea"
                rows="1"
                placeholder="Write a comment.."
                value={comment}
                onChange={(e) => { setComment(e.target.value) }}
                onClick={addCommentinArray}
            >

            </textarea>
            <button className="commentInput__btn">Post</button>
        </div>
    )
}
