import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>FAQ</li>
        <li>Media Centre</li>
        <li>Ways to Watch</li>
        <li>Cookie Preferences</li>
        <li>Speed Test</li>
        <li>Help Centre</li>
        <li>Investor Relations</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
        <li>Legal Notices</li>
        <li>Account</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Contact Us</li>
        <li>Only on NeTflix</li>
      </ul>
      <p className='copyright-text'>CopyRight 2025 Netflix, Inc</p>
    </div>
  )
}

export default Footer 
