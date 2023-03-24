import React from "react";
import "../footer.css";



const footer=()=>{
    return (
        <div className="footer">
            <div className="footer section_padding">
                <div className="footer-links">
                    <div className="footer-links-div">
                        <h4>Contact Us</h4>
                        <a href="#"></a>
                        <p>email/form</p>
                    </div>
                </div>
            </div>
            <div className="footer-links_div">
                <h2>Coming soon on</h2>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p></p>
            </div>

            <hr></hr>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Star RISE. All rights reserved.
                    </p>
                </div>
                <div className="footer-terms">
                    <a href="/terms">
                        <div>
                            <p>Terms & Conditions</p>    
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default footer;