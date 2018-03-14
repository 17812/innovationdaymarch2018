import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col,Collapse, Container } from 'reactstrap';
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody} from 'react-accessible-accordion';
import NumberSlider from './Slider';
import DoughnutChart from './Doughnut';

import HOSTNAME from '../app-config';

import fetch from 'node-fetch';


class Workflows extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      value1 : 10,
      value2 : 70,
      value3 : 20,
      activeItems  : [0,1]

    };
  }

  handleSliderUpdate(value){
    this.setState({
      value1: value
    });
    console.log(this.state);
  }

  componentWillMount(){

    fetch('http://localhost:6020/me')
      .then((res) => res.text())
      .then((body) => console.log(body));
  }

  
  render() {
    let value1  = this.state.value1;
    let value2  = this.state.value2;
    let value3  = this.state.value3;

    return (
      <div className="content--position">
        <Row className="position">
          <Col md="8">
            <Accordion className="u-margin-top" accordsion={false} activeItems={this.state.activeItems}>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3 className="u-position-relative">
                    Finance - Audit
                    <div className="accordion__arrow" role="presentation" />
                  </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <Row>
                    <Col md={2}><p></p><p></p><p></p><p></p><span className="workflow--font"><b>Workflow A</b></span></Col>
                    <Col md={9}>
                      <NumberSlider handleSliderUpdate={this.handleSliderUpdate}/>
              
                    </Col>
                    <Col md={1}><p></p><p></p><p></p><p></p><span className="workflow--font">{value1}%</span></Col>
                  </Row>
                  <br/>
                  <br/>
         
                  <div className='value'>{value2}</div>
                  <br/>
                  <br/>
       
                  <div className='value'>{value3}</div>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>

            <br/>
            <Accordion>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3 className="u-position-relative">
                Finance - Planning
                    <div className="accordion__arrow" role="presentation" />
                  </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>
                Why would you need more than one?
                  </p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
            <br/>
            <Accordion>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3 className="u-position-relative">
            Finance - Tax
                    <div className="accordion__arrow" role="presentation" />
                  </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>
            Why would you need more than one?
                  </p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
            <br/>
            <Accordion>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3 className="u-position-relative">
            Finance - Treasury
                    <div className="accordion__arrow" role="presentation" />
                  </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>
            Why would you need more than one?
                  </p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </Col>
          <Col md="4">
            <DoughnutChart value1={this.state.value1} value2={this.state.value2} value3={this.state.value3}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Workflows;