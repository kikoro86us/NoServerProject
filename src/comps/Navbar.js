import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './../h1.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className='header'>
                <div className='wrapper'>
                    <nav>
                    <Link to='/'><span><img src={logo} className='logo' id='hlogo' alt="logo"/></span></Link>
                        
                        <ul className='navbar'>
                            <Link to='/'><li>Home</li> </Link>
                            <Link to='/passport'><li>Passport</li> </Link>
                            <Link to='/currency'><li>Currency</li> </Link>
                         </ul>
                    </nav>
                </div>
            </div>
        );
    }
}