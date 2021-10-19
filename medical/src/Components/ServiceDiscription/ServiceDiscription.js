import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import SingleService from '../SingleService/SingleService';
import './ServiceDiscription.css'

const ServiceDiscription = (props) => {
    const {servicediscription} = useParams();
    const [product,setProduct] = useState()

    useEffect(()=>{
        fetch('/custom.json')
        .then(Response => Response.json())
        .then(data => setProduct(data.find((p)=> p.key === Number(servicediscription))))
        
    },[servicediscription])
    console.log(product)
    return (
        <div className="container">
            <div className="row">
                {/* { !product ? <p>Loading...</p> : <SingleService product={product}/> } */}
            { !product ? <p>Loading...</p> : <ServiceInfo product={product}></ServiceInfo>}
            </div>
        </div>
    );
};

export default ServiceDiscription;