import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/user'
import { Post } from '..';

import './style.css'
import { db } from '../../firebase';

export default function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => {
            console.log(snapshot)
            setPosts(snapshot.docs.map((data) => {
                return ({
                    id: data.id,
                    caption: data.data().caption,
                    imageUrl: data.data().imageURL,
                    comments: data.data().comments,
                    username: data.data().name,
                    profilePic: data.data().profilePic,
                    userId: data.data().uId
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
            <Post
                profileUrl='https://tejas-ladhani.github.io/Tejas.Ladhani/assets/images/photo.jpg'
                username="TejasLadhani"
                postUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Fh2qh1f34FwFfmC0lt5zTwHaEK%26pid%3DApi"
                caption="This is my First Post with first caption."

            />

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
