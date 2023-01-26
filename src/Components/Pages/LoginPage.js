import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import HomePage from './HomePage';
import Navbar from '../Navbar';

import '../../App.css'

export default function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    const handleLogin = e => {
    e.preventDefault();

    // check if username and password match with stored data
    const storedData = localStorage.getItem('data');
    if (storedData) {
        const data = JSON.parse(storedData);
        const user = data.find(item => item.username === username && item.password === password);
    if (user) {
        setIsLoggedIn(true);
        setUserData(user);
    } else {
        alert('Incorrect username or password');
    }
    }
    };


        const handleLogout = () => {
          setIsLoggedIn(false);
          setUserData({});
        };
        
        const navigate = useNavigate();
        const navigateToHome = () => {
            // navigate to /home
            navigate('/home');
          };
      
    
    if (isLoggedIn) {
        return (
            <div>            
                <Navbar />
                <div className='flex justify-center'>
                    <h1>Welcome, {userData.username} &nbsp; &nbsp;</h1>  
                    <button onClick={handleLogout} type="button" class="self-end py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Logout</button>
                </div>
                <HomePage />
            </div>
        );
    } else {
        return (
                <main>
                    <Navbar />
                    <div className="text-center m-5-auto">
                        <h2>Sign in to us</h2>
                        <form onSubmit={handleLogin}>
                            <p>
                                <label>Username</label><br/>
                                <input type="text" name="first_name"  required value={username} onChange={e => setUsername(e.target.value)} />
                            </p>
                            <p>
                                <label>Password</label>
                                <br/>
                                <input type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                            </p>
                            <p>
                                <button id="sub_btn" type="submit">Login</button>
                            </p>
                        </form>
        
                        <footer>
                            <p className='text-green-500'>First time? <Link to="/register">Create an account</Link>.</p>
                            <p className='text-sky-400'><Link to="/">Back to Homepage</Link>.</p>
                        </footer>
                    </div>
                </main>
                );
        
    }
}


