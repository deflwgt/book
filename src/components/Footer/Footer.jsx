/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import ig_icon from '../../assets/instagram_icon.png'
import fb_icon from '../../assets/facebook_icon.png'


const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={ig_icon} alt="" />
        <img src={fb_icon} alt="" />

        <ul>
          <li>Location</li>
          <li>Help Center</li>
          <li>Gift Card</li>
          <li>Tearm of Use  </li>
          <li>Contact Us</li>
          <li>Privacy</li>
        </ul>
        
      </div>
    </div>
  )
}

export default footer
