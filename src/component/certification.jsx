import React from 'react';
import certification from '../data/certification.json';

const Certifications = () => {
  return (
    <>
      <div className="container certifications my-3" id='certifications'>
        <h1>CERTIFICATIONS</h1>
        <div className="row d-flex justify-content-center align-items-center">
          {certification.map((data) => (
            <div key={data.key} className='my-4 col-md-4 col-lg-4 col-sm-6 mx-4'>
              <div className="card bg-dark text-light" style={{ width: "18rem", border: "1px solid yellow", boxShadow: "5px 5px 10px 5px rgba(101,175,10,0.5)" }}>
                <div className="img d-flex justify-content-center align-items-center p-3">
                  <img src={`/assets/${data.imageSrc}`} className="card-img-top" alt="Certification" 
                    style={{ width: "250px", height: "200px", border: "2px solid yellow", borderRadius: "10px" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <a href={data.viewLink} className="btn btn-primary mx-3">View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Certifications;
