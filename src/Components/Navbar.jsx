import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to="/projects" className="nav-item" activeClassName="nav-item nav-item--active">Projects</NavLink>
      <NavLink exact to="/games" className="nav-item" activeClassName="nav-item nav-item--active">Games</NavLink>
      <NavLink exact to="/twigstick" className="nav-item" activeClassName="nav-item nav-item--active">Home</NavLink>
      <NavLink exact to="/contact" className="nav-item" activeClassName="nav-item nav-item--active">Contact</NavLink>
      <NavLink exact to="/about" className="nav-item" activeClassName="nav-item nav-item--active">About</NavLink>
    </nav>
  )
}

export default Navbar;