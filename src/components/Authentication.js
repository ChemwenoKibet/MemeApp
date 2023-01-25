import React, { useState } from 'react';

function Authentication() {
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


    const handleRegistration = e => {
        e.preventDefault();
        // check if username already exists
        let data = localStorage.getItem('data');
        if (data) {
          data = JSON.parse(data);
          const existingUser = data.find(item => item.username === username);
          if (existingUser) {
            alert('Username already exists');
            return;
          }
        } else {
            data = []
        }
        // add new user to data and store in localStorage
        const newUser = { username, password };
        data.push(newUser);
        localStorage.setItem('data', JSON.stringify(data));
        document.getElementById("message").innerHTML = "Registration successful";
      };


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
            <div>
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign Up
                </h1>
                <form className="mt-6" onSubmit={handleLogin}>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={username} onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={password} onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400 " role="alert" id='message'>
                    
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Log In
                    </a>
                </p>
            </div>
        </div>

                {/* <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
                </form>
                <form onSubmit={handleRegistration}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Register</button>
                </form> */}

                </div>
        );
        
    }
}




export default Authentication;