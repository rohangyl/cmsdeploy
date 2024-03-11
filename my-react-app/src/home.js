import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <>
        <div className='main-container'>

            <div className='header-container'>
            <h1>  Welcome to claim Management System</h1>
            </div>

            <div className='link-container'>
            <Link to="/usercreate">Register</Link>
            <Link to="/userlogin">Login</Link>
          <Link to="/adminlogin">Login as admin</Link>
            </div>

    </div>
        </>
    )
}

export default Home;