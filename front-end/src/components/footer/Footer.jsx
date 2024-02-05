import React from "react";
import './footer.css';
import instagram from '../Assets/instagram_icon.png';
import pinterst from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';
import logo1 from '../Assets/logo_big.png';

const Footer=()=>{
    return(

        <div className="footer">

        <div className="footer-logo">
            <img src={logo1} alt="" />
            <p>GENIE STORE</p>

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterst} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright@2024 - All right reserved</p>
        </div>
        </div>
    )
}
export default Footer;