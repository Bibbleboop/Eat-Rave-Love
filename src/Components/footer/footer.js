import React from "react";
import "./footer.css";



const ReactFooter=()=>{
    return (
        <div className="footer">
            <div className="footer section_padding">
                <div className="footer-links">
                    <div className="footer-links_div">
                        <h3>Contact Us :</h3>
                        <a href="">GitHub</a>
                       

                    </div>
                    <div className="footer-links_div">
                        <h3>Coming Soon To :</h3>
                        <div className="social-media">
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p className="">
                       
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