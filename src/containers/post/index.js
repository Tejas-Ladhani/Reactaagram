import React, { useContext } from 'react'
import './style.css'
import { UserContext } from '../../contexts/user'
import { Comment, CommentInput } from '../../components';
import { db, storage } from '../../firebase';
// import DeleteIcon from '@material-ui/icons/Delete';

export default function Post({ profileUrl, username, id, postUrl, caption, comments, userId }) {

    const [user, setUser] = useContext(UserContext);
    const deletePost = () => {
        // 1. delete  image from storage
        storage.refFromURL(postUrl).delete().then(() => alert("Sucessfully Deleted.")).catch(() => alert("Try again, Later !"))

        // 2. delete info from firestore
        db.collection('posts').doc(id).delete().then(() => console.log('Deleted suceesfully.'))
    }

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    <img src={profileUrl} id="post__userProfile" />
                    <p style={{ paddingLeft: "4px" }}>{username}</p>
                </div>
                {/* <DeleteIcon/> */}

                <button className="post__dltBtn" disabled={(user !== null && userId !== null && user.uid === userId ? false : true)} onClick={deletePost}>Delete</button>
            </div>
            <div className="post__center">
                <img className="post__postImage" src={postUrl} alt={caption}  />
            </div>

            <div className="post__caption">
                <p>
                    <span style={{ fontWeight: "500", marginRight: "6px" }}>{username}</span>
                    <span style={{ fontFamily: "sans-serif" }}>{caption}</span>
                </p>
            </div>
            {comments ? comments.map((cmnt, index) => { return (<Comment key={index} username={cmnt.username} commentMsg={cmnt.commentMsg} />) }) : <></>}

            <hr style={{ margin: '8px 0px', opacity: '0.19' }} />

            {user ? <CommentInput id={id} comments={comments} /> : <></>}
        </div>
    )
}
