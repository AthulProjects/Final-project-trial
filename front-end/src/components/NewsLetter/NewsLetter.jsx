import React from "react";
import './newsletter.css';

const NewsLetter=()=>{
    return(
        <div className="news-letter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your email id" />
                <button>Subscribe</button>
            </div>

        </div>
    )
}
export default NewsLetter;