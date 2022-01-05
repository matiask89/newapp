import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const  MyButton = () => {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/home');
    };
    return <Button variant="danger" onClick={handleClick}>Cancelar</Button>;
  };