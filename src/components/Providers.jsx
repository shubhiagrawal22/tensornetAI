import React from 'react';
import gcloud from '../assets/Logo-Google-Cloud.png';
import aws from '../assets/aws.png';
import nvd from '../assets/nvdia.png';
import google from '../assets/Google_2015_logo.png';

const Providers = () => {
  return (
    <div className='container-fluid provider'>
        <div className='container'>
            <div className="text-center provider-content">
                <p>Our Trusted Service Partners</p>
                <h1>Providers & Collaborators</h1>
            </div>
            <div className="row provider-image p-3">
                <div className="col-lg-2 col-6 pro-img">
                    <img src={gcloud} alt="" />
                </div>
                <div className="col-lg-2 col-6 pro-img">
                    <img src={aws} alt="" />
                </div>
                <div className="col-lg-2 col-6 pro-img">
                    <img src={nvd} alt="" />
                </div>
                <div className="col-lg-2 -col-6 pro-img">
                    <img src={google} alt="" />
                </div>
                <div className="col-lg-2 col-6 pro-img">
                    <img src={gcloud} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Providers