import React from 'react';
import Chip from '@mui/material/Chip';
import {ReactComponent as Img} from "../../assets/xyz.svg";
import "./Card.css"

const Card = ({image,title,chip}) => {
  return (
    <div>
      <div className='card'>
        <img className='album-img' src={image} alt="album" width="159px" height="170px"/>
      <div className='banner'>
      <Chip className='chip' label={chip} />
      </div>
      <div className='title'>
        <h3>{title}</h3>
      </div>
    </div>
    </div>
  )
}

export default Card
