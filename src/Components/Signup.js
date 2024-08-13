import { useState } from 'react';
import '../Styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from '../Assets/bg.jpg';

function Signup() {
    const [email, setEmail] = useState('');
    const [phoneno, setPhno] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('');
    const [aadharno, setAadhar] = useState('');
    const [liscenceno, setLiscence] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email,
            phoneno,
            username,
            password,
            usertype,
            aadharno,
            liscenceno
        };

        console.log('User object:', user); // Confirm the object structure

        try {
            const response = await axios.post('http://localhost:9000/truck/register', user);
            console.log('User registered successfully:', response.data);
            if (usertype === 'customer') {
                navigate('/');
            } else if (usertype === 'driver') {
                navigate('/D_home');
            }
        } catch (error) {
            console.error('There was an error registering the user!', error);
            alert('There was an error registering the user!');
        }
    };

    return (
        <div style={{ backgroundImage:`url(${img})`,height:'100vh',width:'100vw',backgroundSize:'cover',backgroundPosition:'center' }}>
            <div className="App">
                <div className='login' style={{ backgroundColor: 'rgb(238, 254, 234)', width: '75vh',marginLeft:'100vh' }}>
                    <h2>Register</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: '50%' }}>
                                <label>Email</label><br />
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <br /><br />
                                <label>Phone No.</label><br />
                                <input type='tel' value={phoneno} onChange={(e) => setPhno(e.target.value)}></input>
                                <br /><br />
                            </div>

                            <div style={{ flex: '50%' }}>
                                <label>Username</label><br />
                                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                                <br /><br />
                                <label>Password</label><br />
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                <br /><br />
                            </div>
                        </div>
                        <label htmlFor='type'>User Type</label><br />
                        <select name='type' value={usertype} onChange={(e) => setUsertype(e.target.value)}>
                            <option value="">Select</option>
                            <option value="customer">Cargo Clients</option>
                            <option value="driver">Cargo Movers</option>
                        </select>
                        <br /><br />
                        {usertype === 'customer' && (
                            <>
                                <label>Aadhar No.</label><br />
                                <input type='text' value={aadharno} onChange={(e) => setAadhar(e.target.value)}></input>
                            </>
                        )}
                        {usertype === 'driver' && (
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: '50%' }}>
                                    <label>Aadhar No.</label><br />
                                    <input type='text' value={aadharno} onChange={(e) => setAadhar(e.target.value)}></input>
                                </div>
                                <div style={{ flex: '50%' }}>
                                    <label>Liscence No.</label><br />
                                    <input type='text' value={liscenceno} onChange={(e) => setLiscence(e.target.value)}></input>
                                </div>
                            </div>
                        )}
                        <br /><br />
                        <button className='btn'>Register</button>
                    </form>
                    <br></br>
                    <div>
                        Already have an account?
                        <a href='/login' style={{ textDecoration: 'none', cursor: 'pointer' }}>Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
