import React from 'react'
import { ReactComponent as HeadPhone } from '../../assets/headPhone.svg';
import "./HeroImage.css"
const HeroImage = () => {
  return (
    <div className="hero-section">
    <div className='hero-text'>
     <h3>100 Thousand Songs, ad-free</h3>
     <h3>Over thousands podcast episodes</h3>
    </div>
    <div className='head-phone'>
      <HeadPhone/>
    </div>
    </div>
  )
}

export default HeroImage
