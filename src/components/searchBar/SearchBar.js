import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg'
import "./SearchBar.css"
const SearchBar = ({text}) => {
  return (
    <div className="input-wrapper">
        <input className="search-bar" type="search" placeholder={text}/><span className="search-icon"><SearchIcon />   </span>                                                                                                                                       
    </div>
  )
}

export default SearchBar
