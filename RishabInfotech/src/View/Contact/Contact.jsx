
import Form from "../../Components/ContactForm/form"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/nav/Navbar"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './Contact.css'
import Loader from "../../Utils/Loader";

const containerStyle = {
    width: '100vw',
    height: '600px'
};

const center = {

    lat: 23.560729613814008,
    lng: 87.2801004994444
};

const city = {
    lat: 23.538104967962504,
    lng: 87.29812803906515
}


export default function Contact() {


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBFB9J25yd7BvXICteEDggotR7qgB8A3es"
    });


    return (
        <div className="container-fluid p-0 m-0 contact">

            <Navbar />
            <div className="container-fluid map">
                {
                    isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={13}

                        >
                            { /* Child components, such as markers, info windows, etc. */}
                            <Marker position={center} />
                            <Marker position={city} />
                        </GoogleMap>
                    ) :
                    (
                        <div className="loader container"><Loader/></div>
                    ) 
                }

            </div>
            <div>
            <p id="header" className="container d-flex justify-content-center">Contact Us </p>
            </div>
            <div className="formCont m-0">
                <Form />
            </div>


            <div id="footer">
                <Footer />
            </div>

        </div>
    )
}
