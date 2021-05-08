import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse">
            <div className="container"> 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            
            <li className="nav-item nav-link active fs-1">DataBook</li>
            </ul>
            </div>
            
        </div>
        </div>
        </nav>
        <h1 className="mb-5 mt-5">What is DataBook?</h1>
        <div className="container" style={{ backgroundColor: 'rgba(222, 245, 255)', borderRadius: '25px', width: '50%'}}>
            <p className="fs-4">DataBook is a free open-source online web application that helps companies to manage
            their reservations easily from the web.</p>
            <p className="fs-4">If you want to make a reservation right now click <br></br>
                <Link to="/reserve">
                    <a className="link-primary active fs-3"> here</a>
                </Link>
            </p>
        </div>
    </div>
    
    );
}

export default Home;