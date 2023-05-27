import './About.css'
import tally from '../../assets/tally2.png'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom';
export default function About() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px',
  });



  const navigate  = useNavigate()
  return (
    <div className='container intro  p-3 mt-5 '>
      <div className='Intro ' ref={ref}>
        <h2 className={inView ? "introText IntroIn" : "introText"}>Optimize your business with our software for the ultimate management experience.</h2>
        <div id='Introbuttons'>
          <button className='IntroBtn' onClick={()=>{
                                    navigate("/pricing")
                                }}>Pricing</button>

          <button  className='IntroBtn' 
          onClick={()=>{
            navigate("/download")
        }}
        >Download</button>
        </div>
      </div>
      <div className='Logo'>
       
         <img src={tally} alt="tally.png" className='IntroImg'/>
      </div>
  
    </div>
  )
}
