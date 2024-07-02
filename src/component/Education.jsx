import React from 'react';
import education from '../data/study.json';

const Education = () => {
  return (
    <>
      <div className="container edu" id='education'>
        <h1>Education</h1>
        {
          education.map((data) => {
            return (
              <div key={data.id} className="edu-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.degree}</h2>
                  <h4>
                    <span style={{color:"yellowgreen"}}>
                      {data.startDate} - {data.endDate}
                    </span>
                    {" "}
                    <span style={{color:'yellow'}}>
                      {data.location}
                    </span>
                  </h4>
                  <h5 style={{color:'yellow'}}>{data.experiences[0]}</h5>
                  <h5 style={{color:'yellow'}}>{data.experiences[1]}</h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Education;
