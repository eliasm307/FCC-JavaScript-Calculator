import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap"; 

import "./CalculatorSection.scss"; 
import evaluateExp from "../Utils";

const CalculatorSection = ({ numberButtons, controlButtons, className, handleSuccessfulEvaluation, ...restProps }) => {
  // console.log("CalculatorSection: Start"); 
  
  const [displayText, setDisplayText] = React.useState("0");
  const [previewText, setPreviewText] = React.useState("0");
  const [evaluatedExpression, setEvaluatedExpression] = React.useState(0);


  

  const handleButtonClick = (e) => {
    console.log("Button clicked: ", "'" + e.target.innerHTML + "'")

    let clickedButtonValue = e.target.innerHTML.trim();
    let sEvaluatedExp;
    let objButton = {};
    let localDisplayText = displayText; // using a local variable because display text is updated async

    
    if(isNaN(clickedButtonValue) && clickedButtonValue!==".") {
      // if it is a command
      console.log("it is a command button");
      objButton = controlButtons.find(e => e.value===clickedButtonValue)

    }
    else {
      // if it is a number or a decimal point
      console.log("it is a number or decimal point button");
      objButton = numberButtons.find(e => e.value===clickedButtonValue)

    }

    if(clickedButtonValue==="=") {
      // if equals button clicked, return last expression and evaluation result from state to parent

      console.log("it is the equals button, evaluated expression result: ", evaluatedExpression);
        
      handleSuccessfulEvaluation({
        expression: displayText,
        result: evaluatedExpression
      }); 

    }
    else {
      // if a non equals button was clicked then amend display text as required

      console.log("Button clicked object value: ", clickedButtonValue, "display text before action:", localDisplayText); 

      // update display text as per button string action
      localDisplayText = objButton.stringAction(displayText === "0" ? "" : displayText);
      setDisplayText(localDisplayText);  

      console.log("Button clicked object value: ", clickedButtonValue, "display text after action:", localDisplayText); 

      // evaluate updated display text and display preview result
      sEvaluatedExp = evaluateExp(localDisplayText); 
      setEvaluatedExpression(sEvaluatedExp.toString()); 
      setPreviewText(sEvaluatedExp.toString());
    }
 
  }

  const generateButtonsJSX = (arr, defaultColWidth) => {
    // console.log("generateButtonsJSX for:", arr);
 
    return arr.map(e => {  
      // if custom bootstrap col-width has been defined then use it, otherwise use the default
      let btnClassName = "col-sm-" + (e.colWidth===undefined ?  defaultColWidth : e.colWidth);
 
      return (
        <div className={btnClassName + " " + clsx("btn-container" )}>
          <button id={e.id} className="btn btn-dark w-100" key={e.id} onClick={handleButtonClick}>
            {e.value}
          </button>
        </div>
      )

    });
    
  } 

              
  console.log("CalculatorSection: Pre-Render");
  return (
    
    <section id="calculator-section" className="col-md-6"> 
      <Row noGutters > 
        <h2>Calculator</h2>  
      </Row>

      <Row noGutters id="container-display">  
        <Col md={12}>
          <p id="display">{displayText}</p> 
        </Col>

        <Col>
          <p id="preview">= {previewText}</p> 
        </Col>
      </Row>
  
      <Row noGutters>
        <Col className="col-6" id="container-number-buttons">
          <Row noGutters>
            {generateButtonsJSX(numberButtons, 4)}
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
