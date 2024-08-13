import img from '../Assets/img4.jpg';
import img1 from '../Assets/img1.png';
import Navbar from './Navbar';
import Searchbox from './Searchbox';
import Footer from './Footers';
import { Link} from 'react-router-dom';
function Findride() {
 
    return (
        <div>
            <Navbar />
            <div style={{ minHeight: '40vh', position: 'relative' }}>
                <img style={{ height: '40vh', width: '100%', objectFit: 'cover' }} src={img} alt='a'></img>
            </div>
            <div style={{ minHeight: '50vh', position: 'relative',display:'flex'}}>
                <div style={{flex:'50', margin: '80px'}}>
                    <h1>Driving your truck soon?</h1>
                    <p style={{fontSize: '20px'}}>Truck drivers, great news: your good habits are being rewarded! Benefit from the Sharetruck Bonus by sharing rides. See eligibility conditions.</p>
                    <button><Link to={'/offerride'} style={{textDecoration:'none',color:'white'}}>Offer a Ride</Link></button>
                </div>
                <div style={{flex:'50%',paddingTop:'30px'}}>
                    <img src={img1} alt='a' style={{height:'400px',paddingLeft:'65px'}}></img>
                </div>
            </div>
            <div style={{ position: 'absolute', top: '35vh', left: '40vh'}}>
                <h1 style={{color:'white'}}>Get the best deals on shared truck rides at unbeatable prices</h1>
            </div>
            <div style={{ position: 'absolute', top: '46vh', left: '38vh'}}>
                <Searchbox/>
            </div>
            <Footer/>
        </div>
    );
}
export default Findride;