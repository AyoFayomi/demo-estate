import { Link } from 'react-router-dom'
import './footer.css'
import Logo from './logo.png'
const footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="foot-sec">
                    <div className="address">
                        <img src={ Logo } alt="" className="footer-logo"/>
                        <div>
                            <p>Don't just wait for inspiration. Become it.</p>
                            <p>Don't just wait for inspiration. Become it.</p>
                            <p>Don't just wait for inspiration. Become it.</p>
                        </div>
                        
                        <p><i className="far fa-dot-circle addrIcon"></i> 9, Admiralty way, Lekki Victoria Island, Lagos</p>
                        <p><i className="fas fa-phone-alt addrIcon"></i> +2348140192982, +23456129163</p>
                        <ul className="addr-list">
                            <li><i className="fab fa-facebook"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                    <div className="foot-aside">
                        <div className="footer-links">
                            <div className="find-prop">
                                <h4>Find Property</h4>
                                <Link to="/#">By Location</Link>
                                <Link to="/#">By Price</Link>
                                <Link to="/#">By Property Type</Link>
                            </div>
                            <div className="find-prop">
                                <h4>Schedule a call</h4>
                                <Link to="/#">Talk To Verified Agents</Link>
                                <Link to="/#">Book Property Visit</Link>
                                <Link to="/#">How To Schedule A Call</Link>
                            </div>
                            <div className="find-prop">
                                <h4>Online Store</h4>
                                <Link to="/#">Category 1</Link>
                                <Link to="/#">Category 2</Link>
                                <Link to="/#">Category 3</Link>
                                <Link to="/#">Book Property Visit</Link>
                                <Link to="/#">Discount Offer</Link>
                            </div>
                            <div className="find-prop">
                                <h4>Company</h4>
                                <Link to="/#">About Us</Link>
                                <Link to="/#">Contact Us</Link>
                                <Link to="/#">Return Policy</Link>
                            </div>
                        </div>
                        
                        <div className="form-sub">
                            <label>Get updates about New Properties & New Products</label>
                            <form action="post">
                                <input type="email" name="Subscribe Email" id="email-sub" placeholder="Enter Email Address here"/>
                                <button type="submit" className="footer-btn">Send</button>    
                            </form>
                            
                        </div>
                    </div>
                   
                   
                </div>
            </div>
            <div className="copy">
                <p className="copy-txt">Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2020 Grantlandhaven.com. All rights reserved</p>
            </div>
            
        </footer>
    )
}

export default footer
