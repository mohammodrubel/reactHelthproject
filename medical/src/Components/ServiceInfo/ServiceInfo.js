import React from 'react';

const ServiceInfo = (props) => {
    const {key,service,serviceDecription,doctorName,doctorIMg} = props.product
    return (
        <div className="col">
           <div class="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={doctorIMg} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{service}</h5>
                        <h4>{doctorName} </h4>
                        <p className="card-text">{serviceDecription}</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ServiceInfo;