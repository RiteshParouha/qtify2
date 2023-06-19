import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import Button from '../button/Button'
import Logo from '../logo/Logo'
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Logo/>  
      <SearchBar text={"Search an album of your choice"}/>
      <Button text={"Give Feedback"}/>
    </div>
  )
}

export default NavBar
