import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './App.css'

const Profile = () => (
    <Jumbotron className="jumbo">
        <div className="overlay">
            <Container>
                <h1 className="title">Welcome to my application!</h1>
            </Container>
        </div>
    </Jumbotron>
)

export default Profile;