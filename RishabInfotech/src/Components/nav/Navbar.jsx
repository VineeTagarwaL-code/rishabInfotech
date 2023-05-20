import './Navbar.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHouse , faCircleInfo, faUser, faDollarSign, faDownload , faPhone} from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate= useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent p-0 ">
                <div className="container-fluid d-flex flex-row justify-content-between ">
                    <a className="navbar-brand" href="#">
                        <img className='nav-image' src={logo} />
                    </a>



                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex  w-100 justify-content-end">


                            <li className="nav-item">
                                <button className="nav-link nav-btn sub-btn" onClick={()=>{
                                    navigate("/home")
                                }} aria-current="page" href="#">Home</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link nav-btn sub-btn" aria-current="page" href="#" onClick={()=>{
                                    navigate("/about")
                                }}>About Us</button>
                            </li>


                            <li className="nav-item">
                                <button className="nav-link nav-btn sub-btn" aria-current="page" href="#" onClick={()=>{
                                    navigate("/contact")
                                }}>Support</button>
                            </li>


                            <li className="nav-item">
                                <button className="nav-link nav-btn main-btn px-4" aria-current="page" href="#" onClick={()=>{
                                    navigate("/pricing")
                                }}>Pricing</button>
                            </li>



                            <li className="nav-item">
                                <button className="nav-link nav-btn main-btn px-4" aria-current="page" href="#" onClick={()=>{
                                    navigate("/download")
                                }}>Download</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header p-2">
                    <img className='offCanImage' src={logo} />
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0 mt-3">

                    <ul className='nav-off-links d-flex flex-column p-0'>
                        <li className='offLi'>
                        <FontAwesomeIcon className="offCanIcon" icon={faHouse} size="lg" />
                            <button  className='btn-offCan btn' aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/home")
                            }}
                            >Home</button>
                        </li>
                        <li className='offLi'>
                            <FontAwesomeIcon className="offCanIcon" icon={faCircleInfo} style={{color: "#004c8e",}}  size="lg" />
                            <button className='btn-offCan btn' aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/about")
                            }}
                            >About Us</button>
                        </li>
                        <li className='offLi'>
                             <FontAwesomeIcon className="offCanIcon" icon={faUser} style={{color: "#004c8e",}}  size="lg" />
                            <button  className='btn-offCan btn'aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/contact")
                            }}
                            >Support</button>
                        </li>
                        <li className='offLi'>
                            <FontAwesomeIcon className="offCanIcon" icon={faDollarSign} style={{color: "#004c8e",}}  size="lg" />
                            <button className='btn-offCan btn' aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/pricing")
                            }}
                            >Pricing</button>
                        </li>
                        <li className='offLi'> 
                        <FontAwesomeIcon className="offCanIcon" icon={faDownload} style={{color: "#004c8e",}}  size="lg"  />
                            <button className='btn-offCan btn' aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/download")
                            }}
                            >Download</button>
                        </li>
                    </ul>
                

                </div>

                <span className=' offCanBottom'> <FontAwesomeIcon className="px-2"icon={faPhone} style={{color: "#004c8e",}}  size="xs"  />Contact us at <span style={{fontWeight:"bold"}}>8001501104</span></span>
            </div>
        </>
    )
}
