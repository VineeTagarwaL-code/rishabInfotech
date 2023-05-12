import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/nav/Navbar"
import '../Contact/Contact.css'

import maintain from '../../assets/underMaintain.png'
export default function Pricing() {
    return (
        <div className="container-fluid p-0 m-0 home">

            <Navbar />

            <div className=" container underMaintaince">
                <img src={maintain} />
            </div>

            <div id="footer">
                <Footer />
            </div>

        </div>
    )
}
