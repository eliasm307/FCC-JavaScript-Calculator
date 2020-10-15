
import { evaluate } from "mathjs";
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 

import "./global-styles.scss";

const date = new Date();

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
      return evaluate(sExpression)
    } 
    catch(e) {
      console.log(e);
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
  
          
  
        </Container>
      </>
    );

  }

}


export default App