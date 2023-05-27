import './intro.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle, faGear, faDoorOpen,faCircleDown, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


export default function Intro() {
  return (
    <div className='container  p-3 pt-4 introCont'>
      <div id="top">
        <div className='introLeft'>
          <h2 className="head">Who Are We?</h2>
          <div className='Cont1'>
            <h4 id='info'>We are a certified partner of Tally Solutions Pvt. Ltd., having been associated with them since 2008. With extensive experience in selling and implementing Tally software applications, we are proud to be a premier software solutions provider in Durgapur and neighboring districts. Our dedicated team excels in IT consultancy and services, catering to a wide range of industries including Manufacturing, Distribution, and Transport. By leveraging the latest software tools and technologies, we help businesses enhance their processes and gain a competitive edge. With a strong focus on customer satisfaction, we continuously improve our software engineering and delivery processes, making us the preferred partner in the business application software services domain.</h4>
            <div className='introLeftBt'>
              <FontAwesomeIcon style={{ color: "rgb(247, 247, 129)", marginRight: "10px" }} size="xl" icon={faQuoteLeft} />
              <span className='qoute'>We Grow With You</span>
              <FontAwesomeIcon style={{ color: "rgb(247, 247, 129)", marginLeft: "10px" }} size="xl" icon={faQuoteRight} />
            </div>
          </div>
        </div>
        <div className='introRight pt-3'>
         
          <div className='cardIntro'>
            <FontAwesomeIcon icon={faHandshakeAngle} className="introIcon" style={{ color: "#004c8e" }} />
            <h5>We Provide 24/7 Support , Ready to help you and your team to overcome obstacles </h5>
          </div>
          <div className='cardIntro'>
            <FontAwesomeIcon icon={faGear} className="introIcon" style={{ color: "#004c8e" }} />
            <h5>We Provide Excellent Techinal Support On a Wide Variety of Electrical Products</h5>
          </div>
          <div className='cardIntro'>
            <FontAwesomeIcon icon={faDoorOpen} className="introIcon" style={{ color: "#004c8e" }} />
            <h5>We Provide Doorstep Service for any assistance You Need With Your Bussiness </h5>
          </div>
         
        </div>
     
      </div>

    

    </div>
  )
}
