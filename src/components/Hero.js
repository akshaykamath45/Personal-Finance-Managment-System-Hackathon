import React from 'react'
import './Hero.css';

export const Hero = ({imageSrc}) => {
  return (
    <div className='hero'>
        <img src={imageSrc} alt="travel" className='hero_img'></img>
        <h1 className='hero_title'>Travel Made Simple</h1>
    </div>
  )
}

