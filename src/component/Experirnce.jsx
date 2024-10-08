import React from 'react';
import experience from '../data/Experience.json';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <>
      <Container className="ex" id="experience">
        <h1 className="text-left my-5">Experience</h1>
        {experience.map((data) => (
          <Row key={data.id} className="ex-items text-left my-5" data-aos="zoom-in" data-aos-duration="1000">
            <Col
              xs={12} sm={6} md={4} lg={3}
              className="mb-2 d-flex justify-content-left align-items-left"
              style={{
                maxWidth: '250px',
                height: 'auto',
                minHeight: '200px',
                '@media (max-width: 576px)': {
                  height: '300px',
                  maxWidth: '150px'
                }
              }}
            >
              <img
                src={`/assets/${data.imageSrc}`}
                alt=""
                className="img-fluid rounded"
                style={{ maxHeight: '150px', objectFit: 'contain', width: '100%' }}
              />
            </Col>
            <Col
              xs={12} sm={6} md={8} lg={9}
              className="text-left"
            >
              <h2 style={{ fontSize: '1.5rem', wordWrap: 'break-word' }}>{data.role}</h2>
              <h4 style={{ fontSize: '1.25rem', wordWrap: 'break-word' }}>
                <span style={{ color: "yellowgreen" }}>
                  {data.startDate} - {data.endDate}
                </span>{' '}
                <span style={{ color: 'yellow' }}>
                  {data.location}
                </span>
              </h4>
              <h5 style={{ color: 'yellow', fontSize: '1rem', wordWrap: 'break-word' }}>{data.experiences[0]}</h5>
              {/* <h5 style={{ color: 'yellow', fontSize: '1rem', wordWrap: 'break-word' }}>{data.experiences[1]}</h5> */}
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Experience;
