
import './service.css'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom';
export default function Service() {

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '0px',
      });

      const navigate  = useNavigate()
    return (
        <div className='container serviceCont' >
            <div id='topServiceHeading'>

                <h2 className='head main-color head1'>What We Provide ? </h2>
            </div>
            <div>
                <h3 id="subHeadS">Welcome to our service, where we provide exceptional solutions tailored to your needs.</h3>
            </div>
            <div className='services' ref={ref}>
                <div   className={inView ? "cardS odd fadeIn" :'cardS'}>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Data Synchronization</h3>
                        <h5 className='cardInfo'>You can share data between two or more instances of Tally.ERP 9  using a client–server environment using Data Synchronisation.</h5>
                    </div>
                    <div id='leftR'>
                        <h1 className={inView ? "numbers fadeN" :'numbers'}>O1</h1>
                    </div>
                </div>

                <div className={inView ? "cardS even fadeIn" :'cardS even'}>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Annual Maintenance Charges (AMC)</h3>
                        <h5 className='cardInfo'>Today technology enables us to offer faster Support without any physical presence on site, for this we provide support backed by a team of remote experts.</h5> </div>
                    <div id='leftR'>
                        <h1 className={inView ? "numbers fadeN" :'numbers'}>02</h1>
                    </div>
                </div>

                <div className={inView ? "cardS odd fadeIn" :'cardS odd'}>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Training</h3>
                        <h5 className='cardInfo'>Training is fundamentally important for any types of Organizations We work on your behalf to source the right training courses for your workforce. </h5></div>
                    <div id='leftR'>
                        <h1 className={inView ? "numbers fadeN" :'numbers'}>O3</h1>
                    </div>
                </div>

                <div className={inView ? "cardS even fadeIn" :'cardS even'}>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Implementation</h3>
                        <h5 className='cardInfo'>The key to a successful solution is making sure that your software is up and running quickly, while optimized to your specific business needs. </h5></div>
                    <div id='leftR'>
                        <h1 className={inView ? "numbers fadeN" :'numbers'}>O4</h1>
                    </div>
                </div>

                <div className={inView ? "cardS odd fadeIn" :'cardS odd'}>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Onsite and Online Support</h3>
                        <h5 className='cardInfo'>Rsiahb Infotech also provide you a flexibility of Paid Online or Onsite services, as all customers at all short of time don’t require AMC services.</h5></div>
                        <div id='leftR'>
                        <h1 className={inView ? "numbers fadeN" :'numbers'}>05</h1> 
                    </div>
                </div>
            </div>
           <div className='bottomCont'>
            <h3 id='btHead'>Experience Our Support And Service Yourself , Try now !</h3>
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
        </div>
    )
}
