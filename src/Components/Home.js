import Navbar from "./Navbar";
import img1 from '../Assets/img3.jpg';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Footer from "./Footers";
import NewsletterForm from "./Newsletter";
import img6 from '../Assets/img6.png';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Navbar />
            <div style={{ minHeight: '90vh', display: 'flex', textAlign: 'left' }}>
                <div style={{ flex: '50%', fontSize: '30px', margin: '80px', }} >
                    <h1>Join the <span style={{ color: 'green' }} >ShareTruck</span> community and save big on your next move!</h1>
                    <button><Link to={'/findride'} style={{textDecoration:'none',color:'white'}}>Find a Ride</Link></button>
                </div>
                <div style={{ flex: '50%', marginTop: '90px' }} >
                    <img src={img1} alt="a" style={{ height: '400px' }}></img>
                </div>
            </div>
            <div style={{ minHeight: '60vh', display: 'flex', textAlign: 'centre', backgroundColor: 'rgb(206, 254, 192)' }}>
                <div style={{ flex: '20%', margin: '90px' }} >
                    <LocalShippingIcon sx={{ fontSize: 40 }}/>
                    <h4>Affordable Truck Rides for Your Needs</h4>

                    <p>Wherever your goods need to go, find the perfect truck ride from our extensive selection of routes and destinations, all at budget-friendly prices.</p>
                </div>
                <div style={{ flex: '20%', margin: '90px' }} >
                    <VerifiedUserIcon sx={{ fontSize: 40 }}/>
                    <h4>Trust Who You Hire</h4>

                    <p>We carefully vet every driver and truck partner on our platform. With verified reviews, profiles, and IDs, you can book your truck ride with confidence, knowing you're working with reliable professionals.</p>
                </div>
                <div style={{ flex: '20%', margin: '90px' }} >
                    <CheckCircleOutlineIcon sx={{ fontSize: 40 }}/>
                    <h4>Book, Ship, and Relax!</h4>

                    <p>Booking a truck ride has never been easier! With our user-friendly app, powered by cutting-edge technology, you can schedule a truck ride near you in just minutes, ensuring your cargo gets where it needs to go smoothly.</p>
                </div>
            </div>
            <div>
                <img src={img6} alt="a"style={{height:"427px"}}></img>
            </div>
            {/* <NewsletterForm/> */}
            <Footer/>
        </div>
    );
}
export default Home;