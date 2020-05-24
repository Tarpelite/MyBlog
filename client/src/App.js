import React from 'react';
import logo from './logo.svg';
import { Container, Row, Col, Media } from 'reactstrap';
import './App.css';
import Posts from './posts'

import Pic from "./sweetpig.png";

var imgstyle = {
  minwidth:"64px",
}

function App() {
  return (
    <div>
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h2> Timmy & Jessy 's blog</h2>
        </Col>     
      </Row>
      <Row><br /></Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Media >
            <Media left href="#">
              <Media object style={imgstyle} src={Pic} alt="icon" />
            </Media>
            <Media body>
                <p class="intro">Personal blog by Tianyu Chen</p>
                <p class="intro">I record our life with words and code .</p>
            </Media>
            
          </Media>
        </Col>
      </Row>

    </Container>
    <Posts />
    </div>
     
  );
}

export default App;
