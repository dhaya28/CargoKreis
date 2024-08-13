import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Findride from './Components/Findride';
import Selectride from './Components/Selectride';
import MainComponent from './Components/Selectride/Maincomponent';
import Trip from './Components/Trip';
import Offerride from './DriverModule/D_Offerride';
import Myrides from './Components/Myrides';
import Ridedetails from './Components/Ridedetails';
import D_Home from './DriverModule/D_Home';
import D_Myride from './DriverModule/D_Myride';
import D_Ridedetails from './DriverModule/D_Ridedetails.js';
import D_Vehicleregistration from './DriverModule/D_Vehicleregistration.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/findride' element={<Findride/>} />
          <Route path='/selectride' element={<Selectride/>} />
          <Route path='/select' element={<MainComponent/>}/>
          <Route path='/trip' element={<Trip/>}/>
          <Route path='/myride' element={<Myrides/>}/>
          <Route path='/ridedetail' element={<Ridedetails/>}/>

          <Route path='/D_offerride' element={<Offerride/>}/>
          <Route path='D_home' element={<D_Home/>}/>
          <Route path='/D_myride' element={<D_Myride/>}/>
          <Route path='/D_ridedetail' element={<D_Ridedetails/>}/>
          <Route path='/D_vehicleregistration' element={<D_Vehicleregistration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
