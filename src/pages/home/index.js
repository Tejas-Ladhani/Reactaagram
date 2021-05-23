import React from 'react'
import { CreatePost, Feed, Navbar } from '../../containers'
import './style.css'
export default function Home() {
    return (
        <div className="home">
             <Navbar/>
             <CreatePost/>
             <Feed/>
        </div>
    )
}
