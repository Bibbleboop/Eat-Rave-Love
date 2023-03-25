import React from "react";
import "./footer.css";



const ReactFooter=()=>{
    return (
        <div className="footer">
            <div className="footer section_padding">
                <div className="footer-links">
                    <div className="footer-links-div">
                        <h3>Contact Us</h3>
                        <a href="#"></a>
                        <p>email/form</p>
                    </div>
                </div>
            </div>
            <div className="footer-links_div">
                <h3>Coming Soon On :</h3>
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
                    <a href="/privacy">
                        <div>
                            <p>Privacy</p>    
                        </div>
                    </a>
                    <a href="/security">
                        <div>
                            <p>Security</p>    
                        </div>
                    </a>
                    <a href="/cookies">
                        <div>
                            <p>Cookies declaration</p>    
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReactFooter;