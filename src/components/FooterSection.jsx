import React from 'react';
import {Footer, Container, Row, Col, Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';

const FooterSection = () => (

  <div>
    <footer className="footer">
      <Container fluid className="pt-4">
        <Row>
          <Col md="2">
            <Link className="footer-link footerhover" to="/">Report a Bug</Link>
          </Col>
          <Col md="2">

            <Link className="footer-link footerhover" to="/">Terms of Use</Link>

          </Col>
          <Col md="2">

            <Link className="footer-link footerhover" to="/">Feedback</Link>

          </Col>
          <Col md="6">
            <img src="/img/IBM-8bar-30pt.svg" alt="IBM logo" className="img-fluid float-right"></img><br/>
          </Col>
        </Row>

      </Container>
    </footer>

  </div>

);

export default FooterSection;