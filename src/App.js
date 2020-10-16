
import { evaluate } from "mathjs";
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import CalculatorSection from "./components/CalculatorSection";


import "./global-styles.scss";

const date = new Date();

const numberButtons = [
  
  
  {
    id: "one",
    keyCode: 0,
    value: "1",
  }, 
  {
    id: "two",
    keyCode: 0,
    value: "2",
  }, 
  {
    id: "three",
    keyCode: 0,
    value: "3",
  }, 
  {
    id: "four",
    keyCode: 0,
    value: "4",
  }, 
  {
    id: "five",
    keyCode: 0,
    value: "5",
  }, 
  {
    id: "six",
    keyCode: 0,
    value: "6",
  }, 
  {
    id: "seven",
    keyCode: 0,
    value: "7",
  }, 
  {
    id: "eight",
    keyCode: 0,
    value: "8",
  }, 
  {
    id: "nine",
    keyCode: 0,
    value: "9",
  },
  {
    id: "zero",
    keyCode: 0,
    value: "0",
    colWidth: 8 
  }, 
  {
    id: "decimal",
    keyCode: 0,
    value: "." 
  },
];

const controlButtons = [
  {
    id: "add",
    keyCode: 0,
    value: "+"
  }, 
  {
    id: "subtract",
    keyCode: 0,
    value: "-",
    
  }, 
  {
    id: "divide",
    keyCode: 0,
    value: "/",
    
  }, 
  {
    id: "multiply",
    keyCode: 0,
    value: "x",
    
  }, 
  {
    id: "clear",
    keyCode: 0,
    value: "C",
    colWidth: 12
    
  }
];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExpression: "",
      currentResult: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  evaluateExp(sExpression) { 
    try {
      console.log("Evaluating expression:", sExpression)
      return evaluate(sExpression)
    } 
    catch(e) {
      // console.log("MathJS error:", e);
      return "Error";
    }

  }

  handleInputChange(e) { 
    this.setState({
      currentExpression: e.target.value,
      currentResult: this.evaluateExp(e.target.value)
    })
  }
  

  render() {
    console.log(date.toLocaleString(), "App pre-render");

    return (
      <>
        <Container fluid className="App">
          <Row>
            <h1>Javascript Calculator</h1> 
          </Row>
  
          <Row>
            
            <Col>
              <input id="txt" type="text" onChange={this.handleInputChange} />
            </Col>
  
            <Col>
              <p>{this.state.currentExpression}</p>
            </Col>

            <Col>
              <p>{this.state.currentResult}</p>
            </Col>
   
          </Row>
  
          <Row>
            <CalculatorSection numberButtons={numberButtons} controlButtons={controlButtons} />
          </Row>
          
  
        </Container>
      </>
    );

  }

}


export default App