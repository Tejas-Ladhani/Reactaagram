import React, { useEffect, useState } from 'react'
import { UserContext } from '../../contexts/user'
import { Post } from '..';

import './style.css'
import { db } from '../../firebase';

export default function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            // console.log(snapshot)
            setPosts(snapshot.docs.map((data) => {
                return ({
                    id: data.id,
                    caption: data.data().caption,
                    imageUrl: data.data().imageURL,
                    comments: data.data().comments,
                    username: data.data().name,
                    profilePic: data.data().profilePic,
                    userId: data.data().uId,

                })
            }))
            //     console.log("d "+d)
            //     db.collection('main').doc(d.id).collection('posts').onSnapshot((s)=>{
            //         setPosts(s.docs.map((data)=>{
            //             console.log(data.data().name+" "+data.data().imageURL)
            //             return(

            //             {id:data.id,
            //             caption:data.data().caption,
            //             imageUrl:data.data().imageURL,
            //             comments:data.data().comments,
            //             username:data.data().name,
            //             profilePic:data.data().profilePic
            //             });
            //         }))
            //     })
            // })
        })
    }, [])

    return (
        <div className="feed">


            {posts.map((p) => {
                return (
                    <Post
                        key={p.id}
                        id={p.id}
                        profileUrl={p.profilePic}
                        username={p.username}
                        postUrl={p.imageUrl}
                        caption={p.caption}
                        comments={p.comments}
                        userId={p.userId}
                    />
                )
            })}
        </div>
    )
}
