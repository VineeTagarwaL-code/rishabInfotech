import './form.css'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'



export default function Form() {

  const [email, setEmail] = useState("")

  const [name, setName] = useState("")

  const [mobile, setMobile] = useState("")

  const [serial, setSerial] = useState("")

  const [message, setMessage] = useState("")

  //set validation errors state

  const [nameError, setIsNameError] = useState(false)
  const [emailError, setIsEmailError] = useState(false)
  const [mobileError, setIsMobileError] = useState(false)

  //message sent or not 

  const [messageSent, setIsMessageSent] = useState(false)
  //funcitons to validate input values and update my state

  const CheckValidName = (e) => {
    const regex = /^.{5,30}$/
    if (regex.test(e.target.value)) {
      setName(e.target.value)
      setIsNameError(false)

    } else {
      setIsNameError(true)
      setTimeout(() => {
        setIsNameError(false)
      }

        ,
        5000)
    }
  }

  const CheckValidEmail = (e) => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(e.target.value)) {
      setEmail(e.target.value)
      setIsEmailError(false)
    } else {
      setIsEmailError(true)
      setTimeout(() => {
        setIsEmailError(false)
      }

        ,
        5000)
    }
  }

  const CheckValidMob = (e) => {

    const regex = /^[0-9]{10}$/;
    if (regex.test(e.target.value)) {
      setMobile(e.target.value)
      setIsMobileError(false)
    } else {
      setIsMobileError(true)
      setTimeout(() => {
        setIsMobileError(false)
      }

        ,
        5000)
    }
  }

  const clearAllValues = () => {
    setName("")
    setEmail("")
    setMobile("")
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setIsMessageSent(true)

    setTimeout(() => {
      setIsMessageSent(false)
    }, 5000)
    clearAllValues()
  }
  return (
    <div className='container form py-3 my-5'>


      <div className='formRight p-3'>
        <h3 className="Head color-white"> Lets get in touch</h3>
        <h5 id='subR'>We are open for any suggestion or just to have
          a chat !
        </h5>
        <div id="formContactCard">

          <div className='sec'>
            <FontAwesomeIcon size="2x" icon={faLocationDot} style={{ color: "#ffffff", }} />
            <p className='ContactCard'>Rishab Infotech S2/27 <br /> 2nd Floor
              4th Block, Commercial Estate <br />
              City Centre, Durgapur-713216, India
            </p>
          </div>
          <div className='sec'>
            <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "#ffffff", }} />
            <p className='ContactCard'>support@rishabinfotech</p>

          </div>

          <div className='sec'>
            <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: "#ffffff", }} />
            <p className='ContactCard'>8001501104 / 99322481286</p>

          </div>
          <div className='sec'>
            <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: "#ffffff", }} />
            <p className='ContactCard'>rishabinfotech.com</p>

          </div>


        </div>






      </div>
      <div className='formLeft p-3'>
        <h3 className="Head">Get in touch !</h3>
        <form className='ContactForm' onSubmit={handleSubmit}>

          <label htmlFor="name" id='nameLabel'>Name:</label>
          <input
            value={name}
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => CheckValidName(e)}
          />
          {
            nameError ? <p className='error'>Should Be Between 5-20 Chars</p> : null
          }

          <label htmlFor="email">Email:</label>
          <input
            value={email}
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => CheckValidEmail(e)}
          />
          {
            emailError ? <p className='error'>Enter A Valid Email</p> : null
          }

          <label htmlFor="mobile">Mobile Number:</label>
          <input
            value={mobile}
            type="tel"
            id="mobile"
            name="mobile"
            required
            onChange={(e) => CheckValidMob(e)}
          />
          {
            mobileError ? <p className='error'>Enter A Valid Phone No.</p> : null
          }


          <label htmlFor="serial">Serial No:</label>
          <input id="serial" name="serial" required></input>


          <label htmlFor="message">Message:</label>
          <input id="message" name="message" required></input>
          {
            !messageSent ? <button id="formBtn" type="submit">Send</button> : <button id="formBtn" className='success' type="submit">Sent</button>
          }

        </form>
      </div>
    </div>
  )
}
