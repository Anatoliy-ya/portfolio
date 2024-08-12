import React from 'react';
import { Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiPhotoshop } from 'react-icons/di';
import { SiTypescript, SiSass, SiNestjs, SiPostgresql, SiRedux } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">JavaScript</Tooltip>}>
          <div>
            <DiJavascript1 />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Typescript</Tooltip>}>
          <div>
            <SiTypescript />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Node.js</Tooltip>}>
          <div>
            <DiNodejs />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Nest.js</Tooltip>}>
          <div>
            <SiNestjs />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">React.js</Tooltip>}>
          <div>
            <DiReact />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Redux</Tooltip>}>
          <div>
            <SiRedux />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-top">Preprocessor Sass</Tooltip>}>
          <div>
            <SiSass />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Mongodb</Tooltip>}>
          <div>
            <DiMongodb />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">GitHub</Tooltip>}>
          <div>
            <DiGit />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Postgresql</Tooltip>}>
          <div>
            <SiPostgresql />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Photoshop</Tooltip>}>
          <div>
            <DiPhotoshop />
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;
