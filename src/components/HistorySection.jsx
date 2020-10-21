import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap"; 

import "./HistorySection.scss";

const HistorySection = ({ arrayHistory, className, ...restProps }) => {
  // console.log("HistorySection: Start");

  // let numberButtonsJSX = React.useRef([]) 
  // let controlButtonsJSX = React.useRef([]) 

  console.log("HistorySection, arrayHistory:", arrayHistory );

  const [numberButtonsJSX, setNumberButtonsJSX] = React.useState([]);
  const [controlButtonsJSX, setControlButtonsJSX] = React.useState([]);

  const historyJSX = arrayHistory.map(({expression, result}, i) => {

    return(
      <li key={expression+result+i} className="row no-gutters">
        <Col sm={6}>{expression}</Col> 
        <Col>= {result}</Col>
      </li>
    );

  });


              
  console.log("HistorySection: Pre-Render");
  return (
    
    <section id="history-section" className="col"> 
      <Row noGutters> 
        <h2 id="display">History</h2> 
      </Row>

      <Row noGutters>
        <Col id="container-history">
          
          <ul>
            {historyJSX}
          </ul>
          
        </Col>
      </Row>
  
    </section> 
    
  );
};

HistorySection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  arrayHistory: PropTypes.array.isRequired,
  controlButtons: PropTypes.array.isRequired
};

HistorySection.defaultProps = {
  children: null,
  className: null, 
  arrayHistory: null
};

export default HistorySection;
