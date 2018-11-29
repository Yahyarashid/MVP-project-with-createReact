import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

const Nav = () => {
	  return ( 
  <nav>
      <div className="nav-wrapper">
          <a href="#" className="brand-logo right">Blogger</a>
          <Link to={'/'}>Home</Link> <Link to= {'/create'}>Posts</Link>
         <ul id="nav-mobile" className="left hide-on-med-and-down">
        
          </ul>
      </div>
    </nav>
   )
}

export default Nav;