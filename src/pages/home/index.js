import React,{Suspense,lazy} from 'react'
import { PostSkeleton } from '../../components'
import { CreatePost,Navbar } from '../../containers'
import './style.css'
const Feed=lazy(()=>import('../../containers/feed'))

export default function Home() {
    return (
        <div className="home">
             <Navbar/>
             <CreatePost/>
             <Suspense fallback={<div style={{textAlign:'center',display:'flex','justifyContent':'center'}}>Posts will be shown here .</div>}>
             <Feed/>
             </Suspense>
        </div>
    )
}
