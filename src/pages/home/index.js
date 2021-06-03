import React,{useContext} from 'react'
import { CreatePost, Feed, Navbar } from '../../containers'
import { UserContext } from '../../contexts/user';
import './style.css'
export default function Home() {
    const [user, setUser] = useContext(UserContext);
    return (
        <div className="home">
             <Navbar/>
             <CreatePost/>
             {user?<Feed/>:<div className="home_feed_fallback">[ You need to sign in to see the feed ! ]</div>}
             
        </div>
    )
}
