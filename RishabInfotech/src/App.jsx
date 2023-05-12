import './App.css'

import Contact from './View/Contact/Contact';
import AboutUs from './View/AboutUs/AboutUs';
import Home from './View/HomePage/Home'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Pricing from './View/Pricing/Pricing';
import Download from './View/Download/Download';


function App() {


  return (
    <>
        <Router>   
           <div className="App">
           <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/home" element={<Home/>}/>
           <Route exact path="/contact" element={<Contact/>}/>
           <Route exact path="/about" element={<AboutUs/>}/>
           <Route exact path="/pricing" element={<Pricing/>}/>
           <Route exact path="/download" element={<Download/>}/>
           </Routes>
        
       </div>


        </Router>
  
    </>
  )
}

export default App
