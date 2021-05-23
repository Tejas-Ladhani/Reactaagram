import React, { useContext } from 'react'
import './style.css'
import DeleteIcon from '@material-ui/icons/Delete';
import { Comment } from '../../components';
export default function Post({ profileUrl, username, id, postUrl, caption, comments }) {


    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    <img src={profileUrl} id="post__userProfile" />
                    <p style={{ paddingLeft: "4px" }}>{username}</p>
                </div>
                {/* <DeleteIcon/> */}
                <button className="post__dltBtn">Delete</button>
            </div>
            <div className="post__center">
                <img className="post__postImage" src={postUrl} alt={caption} />
            </div>

            <div className="post__caption">
                <p>
                    <span style={{ fontWeight: "500", marginRight: "6px" }}>{username}</span>
                    <span style={{ fontFamily: "sans-serif" }}>{caption}</span>
                </p>
            </div>

            {comments ? comments.map((cmnt,index) => { return(<Comment key={index} username={cmnt.username} commentMsg={cmnt.commentMsg} />) }) : <></>}

        </div>
    )
}
