import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap"; 

import "./CalculatorSection.scss";

const CalculatorSection = ({ numberButtons, controlButtons, className, ...restProps }) => {
  // console.log("CalculatorSection: Start");

  // let numberButtonsJSX = React.useRef([]) 
  // let controlButtonsJSX = React.useRef([]) 

  const [numberButtonsJSX, setNumberButtonsJSX] = React.useState(() => []);
  const [controlButtonsJSX, setControlButtonsJSX] = React.useState(() =>[]);

  const generateButtonsJSX = (arr, defaultColWidth=4) => {
    // console.log("generateButtonsJSX for:", arr);

    const colWidth = "col-sm-"+defaultColWidth;

    

    return arr.map(e => {

      /*
      let btnClassName = "col-sm-" + defaultColWidth;

      if(e.colWidth) {
        btnClassName = "col-sm-" + e.colWidth;
      } */
      
      let btnClassName = "col-sm-" + (e.colWidth===undefined ?  defaultColWidth : e.colWidth);

      // console.log("btnClassName", btnClassName);

      return (
        <div className={btnClassName + " " + clsx("p-1", {colWidth: !e.colWidth} )}>
          <button id={e.id} className="btn btn-primary w-100" key={e.id}>
            {e.value}
          </button>
        </div>
      )

      });
    
  } 

              
  console.log("CalculatorSection: Pre-Render");
  return (
    
    <> 

      <Col className="col-6" id="container-number-buttons">
        <Row noGutters>
          {generateButtonsJSX(numberButtons)}
        </Row>
      </Col>

      <Col className="col-6" id="container-control-buttons">
        <Row noGutters>
          {generateButtonsJSX(controlButtons, 6)}
        </Row>
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
