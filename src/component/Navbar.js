import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <span className="logo">Logo</span>
        <span className="line">|</span>
        <ul>
            <li className="explore"><span className="elogo"></span>Explore</li>
            <li className="create"><span className="ecreate"></span>Create</li>
            <li className="edit"><span className="eedit"></span>Edit</li>
        </ul>
        <button className="login">Login</button>

      
    </div>
  )
}
