import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';


export default function SignUpPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});


    function handleRegistration(e) {
        e.preventDefault();
        // check if username already exists
        let data = localStorage.getItem('data');
        if (data) {
            data = JSON.parse(data);
            const existingUser = data.find(item => item.username === username);
            if (existingUser) {
                document.getElementById("message").innerHTML = "Username already exists";
                return;
            }
        } else {
            data = [];
        }
        // add new user to data and store in localStorage
        const newUser = { username, password };
        data.push(newUser);
        localStorage.setItem('data', JSON.stringify(data));
        document.getElementById("message").innerHTML = "Registration successful.";
        document.getElementById('sub_btn').style.display = 'none';
        
    }


    // function myFunction() {
    //     let x = document.getElementById("submit-section");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }

    // const submitClear = () => {|
    //     handleRegistration();

    // }


    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData({});
      };

    if (isLoggedIn) {
        return (
            <div>
            <h1>Welcome, {userData.username}</h1>
            <h2>Home Page</h2>
            <button onClick={handleLogout}>Logout</button>
            </div>
        );
    } else {

    return (
        <main>
            <Navbar />
            <div className="text-center m-5-auto">
                <h2>Join us</h2>
                <h5>Create your personal account</h5>
                <form onSubmit={handleRegistration}>
                    <p>
                        <label>Username</label><br/>
                        <input type="text" name="first_name" required value={username} onChange={e => setUsername(e.target.value)}/>
                    </p>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                    </p>

                    <div id='submit-section'>
                        <p className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400 " role="alert" id='message'></p>

                        <p>
                            <button id="sub_btn" type="submit">Register</button>
                        </p>
                    </div>
                    

                </form>
                
                <footer>
                    <p className="text-slate-400 hover:text-sky-400"><Link to="/login"> Proceed to login... </Link>.</p>
                </footer>
            </div>
        </main>
    )

}

}