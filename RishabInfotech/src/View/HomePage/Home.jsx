import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer'
import Intro from '../../Components/RishabIntro/Intro'
import Navbar from '../../Components/nav/Navbar'
import './Home.css'



export default function Home() {
  return (
    <div className="container-fluid p-0 m-0 home">
      <Navbar/>
      <div className='about container-fluid'>
      <About/>
      </div>
      <div className='RishabIntro '>
       <Intro/>
      </div>

      <footer>
        <Footer/>
      </footer>
    
    </div>
  )
}
