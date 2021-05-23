import React from 'react'
import './style.css'

export default function Comment({username,commentMsg}) {
    return (
        <div className="comment">
            <p>
                <span style={{ fontWeight: "500", marginRight: "6px" }}>{username}</span>
                <span style={{ fontFamily: "sans-serif" }}>{commentMsg}</span>
            </p>

        </div>
    )
}
