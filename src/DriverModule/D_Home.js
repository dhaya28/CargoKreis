import Navbar from "./D_Navbar";
import img1 from '../Assets/img1.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Footer from "../Components/Footers";
import img6 from '../Assets/img6.png';
import { Link } from "react-router-dom";

function D_Home() {
    return (
        <div>
            <Navbar />
            <div style={{ minHeight: '70vh', display: 'flex', textAlign: 'left' }}>
                <div style={{ flex: '50%', fontSize: '30px', margin: '80px', }} >
                    <h1>Driving your truck soon?</h1>
                    <p style={{ fontSize: '20px' }}>Truck drivers, great news: your good habits are being rewarded! Benefit from the Sharetruck Bonus by sharing rides.</p>
                    <button><Link to={'/D_offerride'} style={{ textDecoration: 'none', color: 'white' }}>Offer a Ride</Link></button>
                </div>
                <div style={{ flex: '50%', marginTop: '90px' }} >
                    <img src={img1} alt="a" style={{ height: '400px' }}></img>
                </div>
            </div>
            <div style={{ minHeight: '60vh', display: 'flex', textAlign: 'centre', backgroundColor: 'rgb(206, 254, 192)' }}>
                <div style={{ flex: '20%', margin: '90px' }} >
                    <LocalShippingIcon sx={{ fontSize: 40 }} />
                    <h4>Affordable Truck Rides for Your Business</h4>

                    <p>Wherever you're headed, connect with customers looking for reliable truck rides. Choose from our wide selection of routes and destinations, all while offering competitive prices to grow your business.</p>
                </div>
                <div style={{ flex: '20%', margin: '90px' }} >
                    <VerifiedUserIcon sx={{ fontSize: 40 }} />
                    <h4>Trustworthy Connections</h4>

                    <p>We ensure every truck driver and partner is thoroughly vetted. With verified reviews, profiles, and IDs, our secure platform helps you connect with confidence, knowing you're partnering with trusted clients.</p>
                </div>
                <div style={{ flex: '20%', margin: '90px' }} >
                    <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
                    <h4>Drive, Earn, and Grow!</h4>

                    <p>Managing your truck rides has never been easier! Our intuitive app, powered by advanced technology, lets you find and accept trips close to you in just minutes, helping you maximize your earnings on the go.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default D_Home;