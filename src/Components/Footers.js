import React from 'react';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () => {
    return (
        <div>
        <footer className="footer">
            <div className="footer-container">
                <div className="column">
                    <h3>Top truckpool routes</h3>
                    <ul>
                        <li>Delhi → Chandigarh</li>
                        <li>Mumbai → Pune</li>
                        <li>Kanpur → Lucknow</li>
                        <li>Bengaluru → Chennai</li>
                        <li>Pune → Mumbai</li>
                        <li>All Truckpool routes</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>About</h3>
                    <ul>
                        <li>How It Works</li>
                        <li>About Us</li>
                        <li>Help Centre</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className="column">
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>
        </footer>
            <div style={{backgroundColor: 'rgb(206, 254, 192)',height:'80px',display:'flex',verticalAlign:'center'}}>
                <h3 style={{paddingRight:'120px',margin:'30px',marginLeft:'1150px'}}>
                    ShareTruck,2024
                    <CopyrightIcon sx={{ fontSize: 15 }}/>
                </h3>
            </div>
        </div>
    );
}

export default Footer;
