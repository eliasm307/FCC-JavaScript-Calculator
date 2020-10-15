import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container } from "react-bootstrap"; 

import "./PageSection.scss";

const CalculatorSection = ({ children, className, ...restProps }) => {
  return (
    
    <section className={clsx("page-section", className)} {...restProps}>
      <Container fluid>{children}</Container>
      
    </section> 
    
  );
};

CalculatorSection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

CalculatorSection.defaultProps = {
  children: null,
  className: null,
};

export default CalculatorSection;
