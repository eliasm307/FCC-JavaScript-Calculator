import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import CalculatorSection from "./components/CalculatorSection";
import HistorySection from "./components/HistorySection";

import "./global-styles.scss";
import evaluateExp from "./Utils";

/*
TODO

- Add ui to set precision
- Add controls to clear history
*/

const date = new Date();

const numberButtons = [ 
  {
    id: "one",
    keyCode: 0,
    value: "1",
    stringAction: (str) => str + "1"
  }, 
  {
    id: "two",
    keyCode: 0,
    value: "2",
    stringAction: (str) => str + "2"
  }, 
  {
    id: "three",
    keyCode: 0,
    value: "3",
    stringAction: (str) => str + "3"
  }, 
  {
    id: "four",
    keyCode: 0,
    value: "4",
    stringAction: (str) => str + "4"
  }, 
  {
    id: "five",
    keyCode: 0,
    value: "5",
    stringAction: (str) => str + "5"
  }, 
  {
    id: "six",
    keyCode: 0,
    value: "6",
    stringAction: (str) => str + "6"
  }, 
  {
    id: "seven",
    keyCode: 0,
    value: "7",
    stringAction: (str) => str + "7"
  }, 
  {
    id: "eight",
    keyCode: 0,
    value: "8",
    stringAction: (str) => str + "8"
  }, 
  {
    id: "nine",
    keyCode: 0,
    value: "9",
    stringAction: (str) => str + "9"
  },
  {
    id: "zero",
    keyCode: 0,
    value: "0",
    colWidth: 8,
    stringAction: (str) => str + "0"
  }, 
  {
    id: "decimal",
    keyCode: 0,
    value: ".",
    stringAction: (str) => str + "." 
  },
];

const controlButtons = [
  {
    id: "delete",
    keyCode: 0,
    value: "Delete",
    stringAction: (str) => str.substring(1, str.length),
    colWidth: 6 
  }, 
  {
    id: "clear",
    keyCode: 0,
    value: "Clear",
    stringAction: (str) => "0",
    colWidth: 6
  }, 
  {
    id: "add",
    keyCode: 0,
    value: "+",
    stringAction: (str) => str + " + "
  }, 
  {
    id: "subtract",
    keyCode: 0,
    value: "-",
    stringAction: (str) => str + " - " 
  }, 
  {
    id: "divide",
    keyCode: 0,
    value: "/",
    stringAction: (str) => str + " / "     
  }, 
  {
    id: "multiply",
    keyCode: 0,
    value: "x",
    stringAction: (str) => str + " x "     
  },   
  {
    id: "left-bracket",
    keyCode: 0,
    value: "(",
    stringAction: (str) => str + " ( ",
    colWidth: 4     
  }, 
  {
    id: "right-bracket",
    keyCode: 0,
    value: ")",
    stringAction: (str) => str + " ) ",
    colWidth: 4  
  },
  {
    id: "equal",
    keyCode: 0,
    value: "=",
    colWidth: 4
  }
];

const generateHistoryItem = () => {
  return {
    expression: "expression",
    result: Math.random() * 100
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExpression: "",
      currentResult: "",
      arrayHistory: [
        generateHistoryItem(),
        generateHistoryItem(),
        generateHistoryItem(),
      ]
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSuccessfulEvaluation = this.handleSuccessfulEvaluation.bind(this);

  }

  

  handleInputChange(e) { 
    this.setState({
      currentExpression: e.target.value,
      currentResult: evaluateExp(e.target.value)
    })
  }
  
  handleSuccessfulEvaluation({expression, result}) {
    console.log("APP", "handling successufl evaluation of expression and result:", {expression, result });

    console.log("BEOFRE this.state.arrayHistory", this.state.arrayHistory);

    this.setState({
      arrayHistory: [{expression, result}, ...this.state.arrayHistory]
    });
 

    console.log("AFTER this.state.arrayHistory", this.state.arrayHistory);

    
  }

  render() {
    console.log(date.toLocaleString(), "App pre-render, this.state.arrayHistory", this.state.arrayHistory);


    return (
      <>
        <Container fluid className="App">
          <Row noGutters as="section" >
            <h1>Javascript Calculator</h1> 
          </Row>
  
          <Row noGutters as="section">
            
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
  
          <Row noGutters>

            <CalculatorSection numberButtons={numberButtons} controlButtons={controlButtons}  handleSuccessfulEvaluation={this.handleSuccessfulEvaluation}/>

            <HistorySection arrayHistory={this.state.arrayHistory} />

          </Row>
          
  
        </Container>
      </>
    );

  }

}


export default App