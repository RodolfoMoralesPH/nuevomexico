import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar--transparent">
     <span className="logo">TEMUESTROMEXICO</span>

    <div className="right"><ul className="plain_ul">
        <li className="plain_ul--li">Home</li>
        <li className="plain_ul--li">About</li>
        <li className="plain_ul--li">Products</li>
    </ul>
    <ul className="plain_ul">
        <li className="plain_ul--li">Log In</li>
        <li className="plain_ul--li">Sign Up</li>
    </ul>
   </div></div>
  )
}

export default Navbar