import React from "react";
import Button from "react-bootstrap/Button";
// import 'bootstrap/dist/css/bootstrap.min.css';

export const BreedButton = ({text}) => {
  const handleClick =()=>{
    console.log("clicked")
  }
  return( <Button variant="primary" type="button" onClick={handleClick}>{text}</Button>)
  ;
};


export const SitterButton = ({text}) => {
  const handleClick =()=>{
    console.log("clicked")
  }
  return( <Button variant="primary"  onClick={handleClick}>{text}</Button>)
  ;
};