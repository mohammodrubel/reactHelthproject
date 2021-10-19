import React, { useState } from 'react';
import img from '../img/aboutus.jpg'
import { useEffect } from 'react';
import SingleAbut from '../SingleAbuot/SingleAbut';
import { Row } from 'react-bootstrap';

const About = () => {

    const [about,setAbout] = useState([])

    useEffect(()=>{
        fetch("./custom.json")
        .then(Response => Response.json())
        .then(data => setAbout(data))
    },[])
    

    return (
        <div className="container">
            <div><img src={img} className="img-fluid w-100" alt="" />   </div>
            <Row xs={1} md={2} className="g-5 mt-5">
            
            {
                about.map(single => <SingleAbut single={single}></SingleAbut>)
            }
            </Row>
        </div>
    );
};

export default About;