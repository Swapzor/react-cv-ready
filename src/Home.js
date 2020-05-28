import React from 'react';
import Image from 'react-bootstrap/Image'
import picture from './images/cvzdj.jpg'
import './App.css'

const Home = () => (
        <div className="main-page">
            <div className="main-page-one">
            <Image src={picture} roundedCircle className="cv-photo"/>
            </div>
            <div className="main-page-two">
            <p className="main-page-txt">Czesc, witaj na mojej małej aplikacji. Została ona stworzona w celu pokazania moich umiejętności w React.js i nie tylko. 
            Skupiałem się głównie na pokazaniu po troche z każdego, mam nadzieję, że Ci sie spodoba :)</p>
            </div>
        </div>
)
    
export default Home;