import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import CalculatorSection from "./components/CalculatorSection";
import HistorySection from "./components/HistorySection";

import "./global-styles.scss";
import evaluateExp from "./Utils";

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
    stringAction: (str) => str.substring(1, str.length) 
  }, 
  {
    id: "clear",
    keyCode: 0,
    value: "Clear",
    stringAction: (str) => ""
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
    id: "equal",
    keyCode: 0,
    value: "=",
    colWidth: 12
  }
];

const historyItem = {
  expression: "expression",
  result: "result"
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExpression: "",
      currentResult: "",
      arrayHistory: [historyItem]
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
  
  handleSuccessfulEvaluation(expression, result) {
    this.setState({
      arrayHistory: this.state.arrayHistory.unshift({expression, result })
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
  
          <Row >

            <CalculatorSection numberButtons={numberButtons} controlButtons={controlButtons}  handleSuccessfulEvaluation={this.handleSuccessfulEvaluation}/>

            <HistorySection arrayHistory={this.state.arrayHistory} />

          </Row>
          
  
        </Container>
      </>
    );

  }

}


export default App