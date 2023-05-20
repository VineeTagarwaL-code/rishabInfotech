
import logo from '../../assets/logo.png'

import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (

    <footer className='container-lg  footer'>


      <div className='FootRight'>
        <div id='image1'>
          <img src={logo} className='footer-image' />
        </div>
        <div id='textFoot'>
          Our goal is to be the top Tally Solutions partner in the Durgapur region, helping businesses improve their processes with the latest software tools and technologies, and become the go-to software solutions provider for sustainable growth.
        </div>
        <div id='make'>
          <p className='makeText'>Contact Us</p>
        </div>
      </div>
      <div className='FootMiddle'>
        <div className='Socials'>
          <label className='footer-header'>Socials</label>
          <ul className='socials'>
            <li><FontAwesomeIcon icon={faPhone} style={{ color: "#004c8e", }} /></li>
            <li>     <FontAwesomeIcon icon={faEnvelope} style={{ color: "#004c8e", }} /></li>
            <li>          <FontAwesomeIcon icon={faGlobe} style={{ color: "#004c8e", }} /></li>
          </ul>
        </div>
        <div className='Links'>
          <label className='footer-header'>Links</label>
          <ul>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Certification & Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className='FootLeft'>
        <div className='r'>
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff", }} />
          <p className='FooterCard'> Address</p>
        </div>
        <div className='r'>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} />
          <p className='FooterCard'>support@rishabinfotech</p>
        </div>
        <div className='r'>
          <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", }} />
          <p className='FooterCard'>8001501104 / 99322481286</p>
        </div>
        <div className='r'>

          <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff", }} />
          <p className='FooterCard'>rishabinfotech.com</p>
        </div>
      </div>
    </footer>
  )
}
