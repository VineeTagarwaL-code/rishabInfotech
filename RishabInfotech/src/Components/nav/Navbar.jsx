import './Navbar.css'
import logo from '../../assets/logo.png'

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
                <div className="offcanvas-header">
                    <img className='nav-image offCan' src={logo} />
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className='nav-off-links d-flex flex-column p-0'>
                        <li>
                            <button  className='btn-offCan' aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/home")
                            }}
                            >Home</button>
                        </li>
                        <li>
                            <button className='btn-offCan' aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/about")
                            }}
                            >About Us</button>
                        </li>
                        <li>
                            <button  className='btn-offCan'aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/contact")
                            }}
                            >Support</button>
                        </li>
                        <li>
                            <button className='btn-offCan mainbtn px-4' aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/pricing")
                            }}
                            >Pricing</button>
                        </li>
                        <li>
                            <button className='btn-offCan mainbtn px-3' aria-current="page" href="#"
                            onClick={()=>{
                                navigate("/download")
                            }}
                            >Download</button>
                        </li>
                    </ul>

                </div>

                <p className='px-3 '>© Copyright under Rishab Infotech</p>
            </div>
        </>
    )
}
