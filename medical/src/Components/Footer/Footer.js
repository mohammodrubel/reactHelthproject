import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid footers">
            <div className="row">
                <div className="col-md-4 text-center">
                    <h1>RDX Medical</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nulla similique nam saepe impedit voluptatem quibusdam aut voluptate voluptates,</p>
                </div>
                <div className="col-md-4">
                    <ul className="text-center">
                        <li className="list-inline mt-3"><NavLink style={{textDecoration:'none'}} to="/home">Home</NavLink></li>
                        <li className="list-inline mt-3"><NavLink style={{textDecoration:'none'}} to="/service">Service</NavLink></li>
                        <li className="list-inline mt-3"><NavLink style={{textDecoration:'none'}} to="/blog">Blog</NavLink></li>
                        <li className="list-inline mt-3"><NavLink style={{textDecoration:'none'}} to="/aboutus">About Us</NavLink></li>
                        <li className="list-inline mt-3"><NavLink style={{textDecoration:'none'}} to="/doctor">Doctor</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-4 text-center mt-5">
                <ul className="list-inline">
                        <li className="list-inline-item  "><i className="fab comonSocialMedia fa-facebook"></i></li>
                        <li className="list-inline-item  "><i className="fab comonSocialMedia fa-instagram"></i></li>
                        <li className="list-inline-item  "><i className="fab comonSocialMedia fa-twitter"></i></li>
                        <li className="list-inline-item  "><i className="fas comonSocialMedia fa-envelope"></i></li>
                        <li className="list-inline-item  "><i className="fab comonSocialMedia fa-linkedin"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;