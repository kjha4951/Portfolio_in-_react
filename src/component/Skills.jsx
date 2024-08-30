import React from 'react';
import skills from '../data/Skills.json';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container className="skills" id="skills">
      <h1 className="text-left my-5">Skills</h1>
      <Row className="align-items-center">
        {skills.map((data) => (
          <Col 
            key={data.title} 
            xs={12} sm={6} md={4} lg={3} 
            className="mb-4 d-flex align-items-start"
            data-aos="flip-left" 
            data-aos-duration="1000"
          >
            <div className="d-flex align-items-center">
              <img 
                src={`assets/${data.imageSrc}`} 
                alt={data.title} 
                className="img-fluid mb-3 rounded w-50 h-auto" 
                style={{ maxHeight: '100px', objectFit: 'contain', marginRight: '10px' }}
              />
              <h3 className="text-left" style={{ fontSize: '1.25rem', marginTop: '10px' }}>
                {data.title}
              </h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
