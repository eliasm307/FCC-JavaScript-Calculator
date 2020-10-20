import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap"; 

import "./CalculatorSection.scss"; 
import evaluateExp from "../Utils";

const CalculatorSection = ({ numberButtons, controlButtons, className, handleSuccessfulEvaluation, ...restProps }) => {
  // console.log("CalculatorSection: Start"); 
  
  const [displayText, setDisplayText] = React.useState(() => "");
  const [evaluatedExpression, setEvaluatedExpression] = React.useState(0);


  let objButton = {};

  const handleButtonClick = (e) => {
    console.log("Button clicked: ", "'" + e.target.innerHTML + "'")

    let clickedButtonValue = e.target.innerHTML.trim();
 
    if(clickedButtonValue==="=") {
      // equals button clicked

      let s = evaluateExp(displayText);

      

      console.log("it is the equals button, evaluated expression: ", s);
       
      setEvaluatedExpression(s.toString()); 
      setDisplayText("= " + s);
      handleSuccessfulEvaluation({
        expression: displayText,
        result: s
      });
      return
    }
    else if(isNaN(clickedButtonValue) && clickedButtonValue!==".") {
      // if it is a command
      console.log("it is a command button");
      objButton = controlButtons.find(e => e.value===clickedButtonValue)

    }
    else {
      // if it is a number or a decimal point
      console.log("it is a number or decimal point button");
      objButton = numberButtons.find(e => e.value===clickedButtonValue)

    }

    console.log("Button clicked object: ", clickedButtonValue); 
    setDisplayText(objButton.stringAction(displayText));

  }

  const generateButtonsJSX = (arr, defaultColWidth=4) => {
    // console.log("generateButtonsJSX for:", arr);
 
    return arr.map(e => {  
      // if custom bootstrap col-width has been defined then use it, otherwise use the default
      let btnClassName = "col-sm-" + (e.colWidth===undefined ?  defaultColWidth : e.colWidth);
 
      return (
        <div className={btnClassName + " " + clsx("p-1", {colWidth: !e.colWidth} )}>
          <button id={e.id} className="btn btn-primary w-100" key={e.id} onClick={handleButtonClick}>
            {e.value}
          </button>
        </div>
      )

    });
    
  } 

              
  console.log("CalculatorSection: Pre-Render");
  return (
    
    <section className="col"> 
      <Row noGutters> 
        <h2 id="display">Calculator</h2>  
      </Row>

      <Row noGutters>  
        <p id="display">{displayText}</p> 
      </Row>

      <Row noGutters>
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
      </Row>
  
    </section> 
    
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
