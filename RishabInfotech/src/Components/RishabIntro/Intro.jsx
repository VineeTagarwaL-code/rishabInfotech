import './intro.css'
import pic from '../../assets/pic2.png'

export default function Intro() {
  return (
    <div className='container p-3 pt-5 pb-5 introCont'>
      <div className='AboutUs'>
         <h3 id='aboutText'>About Us</h3>
      </div>

      <div className='intro'>
        <div className='introInfo'>

          <h1 className='MainName'>Rishab Infotech</h1>

          <h2 className='IntroAbout'>
            We are a Tally Solutions Certified Partner with
            over a decade of experience in selling and implementing Tally software.
            Our team provides IT consultancy and services to various sectors and helps
            businesses improve processes with the latest software tools and technologies.
            We are a premier software solutions provider in Durgapur and surrounding
            districts.
          </h2>
        </div>
        <div className='picCont'>
          <img src={pic} className='pic' />
          <h5 className='Name'> Rupesh Agarwal</h5>
          <h6 id='status'>Owner</h6>
        </div>
      </div>


    </div>
  )
}
