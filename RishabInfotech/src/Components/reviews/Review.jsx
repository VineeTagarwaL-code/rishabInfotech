import React from 'react'
import './review.css'
import pic from '.././../assets/pic2.png'
function ReviewCard({ pfp, review, name, company }) {
  return (
    <div className='ReviewCcont'>
      <img src={pfp} alt="pfp" className='pfp' />
      <div className='CardRight'>
        <h4 className='review1'>{review}</h4>
        <span id='divider'> </span>
        <h5 className='color-white name'>{name}</h5>
        <h6 className='company'>{company}</h6>
      </div>
    </div>
  )
}
export default function Review() {
  return (
    <div className='container reviewCont' >
      <div className='reviewTop'>
        <h2 className="head head1">What Our Customer Says ?</h2>
      </div>

      <h3  className='color-white subheadC'>
        Discover why our previous customers rave about our outstanding service and see for yourself the positive reviews they've shared. </h3>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <ReviewCard

              pfp={pic}
              review="Rishab Infotech provided friendly and timely assistance for Tally services. Their team was patient, helpful, and tailored solutions to meet my specific requirements. Highly recommended for excellent customer service."
              name="Pawan Mishra"
              company="Balaji Pvt Ltd"
            />
          </div>
          <div className="carousel-item">
            <ReviewCard
              pfp={pic}
              review="Impressed with Rishab Infotech's Tally services. Their team went above and beyond, answering all my questions promptly. Friendly approach and commitment to customer satisfaction make them a top choice."
              name="Aditya Kumar"
              company="Mataji Pvt Ltd"
            />
          </div>
          <div className="carousel-item">
            <ReviewCard
              pfp={pic}
              review="Outstanding Tally services from Rishab Infotech. Their team's friendliness and efficiency were remarkable. They respected my time and addressed all concerns promptly. Highly recommended for reliable assistance."
              name="Pradip Ji"
              company="Packers and Movers Pvt Ltd"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
