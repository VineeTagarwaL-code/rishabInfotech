
import Form from "../../Components/ContactForm/form"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/nav/Navbar"


import './Contact.css'


export default function Contact() {
    return (
        <div className="container-fluid p-0 m-0 basicCont contact">

            <Navbar />

            <div className="formCont my-5">
                <Form/>
            </div>

            <div id="footer">
                <Footer />
            </div>

        </div>
    )
}
