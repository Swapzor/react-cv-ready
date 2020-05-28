import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './components.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGoogle } from "react-icons/fa";

const Footer = () => (
    <Jumbotron className="footer-jumbo">
        <div className="footer-style">
            <Container>
                <div className="link-container">
                    <a href="https://facebook.com" className="link-footer"><FaFacebookSquare size={42}/></a>
                    <a href="https://instagram.com" className="link-footer"><FaInstagramSquare size={42}/></a>
                    <a href="https://twitter.com" className="link-footer"> <FaTwitterSquare size={42}/></a>
                    <a href="https://google.com" className="link-footer"> <FaGoogle size={42}/></a>
                </div>
            </Container>
        </div>
    </Jumbotron>
)

export default Footer;