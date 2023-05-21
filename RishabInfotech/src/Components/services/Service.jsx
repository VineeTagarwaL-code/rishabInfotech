
import './service.css'
export default function Service() {
    return (
        <div className='container serviceCont'>
            <div id='topServiceHeading'>

                <h2 className='head main-color'>What We Provide ? </h2>
            </div>
            <div className='services'>
                <div className='cardS odd'>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Data Synchronization</h3>
                        <h5 className='cardInfo'>You can share data between two or more instances of Tally.ERP 9  using a client–server environment using Data Synchronisation.</h5>
                    </div>
                    <div id='leftR'>
                        <h1 className='numbers'>O1</h1>
                    </div>
                </div>

                <div className='cardS even'>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Annual Maintenance Charges (AMC)</h3>
                        <h5 className='cardInfo'>Today technology enables us to offer faster Support without any physical presence on site, for this we provide support backed by a team of remote experts.</h5> </div>
                    <div id='leftR'>
                        <h1 className='numbers'>02</h1>
                    </div>
                </div>

                <div className='cardS odd'>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Training</h3>
                        <h5 className='cardInfo'>Training is fundamentally important for any types of Organizations We work on your behalf to source the right training courses for your workforce. </h5></div>
                    <div id='leftR'>
                        <h1 className='numbers'>O3</h1>
                    </div>
                </div>

                <div className='cardS even'>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Implementation</h3>
                        <h5 className='cardInfo'>The key to a successful solution is making sure that your software is up and running quickly, while optimized to your specific business needs. </h5></div>
                    <div id='leftR'>
                        <h1 className='numbers'>O4</h1>
                    </div>
                </div>

                <div className='cardS odd'>
                    <div className='rightR'>
                        <h3 className='cardHead'>Tally Onsite and Online Support</h3>
                        <h5 className='cardInfo'>Rsiahb Infotech also provide you a flexibility of Paid Online or Onsite services, as all customers at all short of time don’t require AMC services.</h5></div>
                        <div id='leftR'>
                        <h1 className='numbers'>05</h1> 
                    </div>
                </div>
            </div>

        </div>
    )
}
