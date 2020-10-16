import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap"; 

import "./CalculatorSection.scss";

const CalculatorSection = ({ numberButtons, controlButtons, className, ...restProps }) => {
  console.log("CalculatorSection: Start");

  // let numberButtonsJSX = React.useRef([]) 
  // let controlButtonsJSX = React.useRef([]) 

  const [numberButtonsJSX, setNumberButtonsJSX] = React.useState(() => []);
  const [controlButtonsJSX, setControlButtonsJSX] = React.useState(() =>[]);

  const generateButtonsJSX = (arr) => {
    console.log("generateButtonsJSX for:", arr);
    return arr.map(e => <button key={e.id}>{e.value}</button> );
  } 

              
  console.log("CalculatorSection: Pre-Render");
  return (
    
    <> 

      <Col className="col-6" id="container-number-buttons">

        {generateButtonsJSX(numberButtons)}
        
      </Col>

      <Col className="col-6" id="container-control-buttons">

        {generateButtonsJSX(controlButtons)}

      </Col>
  
    </> 
    
  );
};

CalculatorSection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  numberButtons: PropTypes.array.isRequired,
  controlButtons: PropTypes.array.isRequired
};

CalculatorSection.defaultProps = {
  children: null,
  className: null, 
};

export default CalculatorSection;
