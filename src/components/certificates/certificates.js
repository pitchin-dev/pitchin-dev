import React from 'react';

import './certificates.css';

const Certificates = () => {
    return (
        <section className="experience section">
            <div className="section-inner">
                <h2 className="heading">My Certificates</h2>
                <div className="content">
                    <div className="item">
                        <a href="https://www.udemy.com/certificate/UC-2a9a2e70-cbf4-48b6-a258-976676052827/" target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + 'certificate-1.jpg'} alt="" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="item">
                    <a href="https://www.udemy.com/certificate/UC-3b7346ff-09de-4853-bd3c-53fbd64179ef/" target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + 'certificate-2.jpg'} alt="" className="img-fluid"/>
                        </a>
                    </div>
                    
                    <div className="item">
                    <a href="https://www.udemy.com/certificate/UC-57e4cd4c-c618-47e2-b0a0-9681a5552a42/" target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + 'certificate-3.jpg'} alt="" className="img-fluid"/>
                        </a>
                    </div>
                    
                </div> 
            </div>                
        </section>
    )
}

export {Certificates};