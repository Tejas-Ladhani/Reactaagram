import React from 'react'
import { CreatePost, Navbar } from '../../containers'
import './style.css'
export default function Home() {
    return (
        <div className="home">
             <Navbar/>
             <CreatePost/>
        </div>
    )
}
