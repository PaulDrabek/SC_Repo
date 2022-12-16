import React  from "react";
import Container from "react-bootstrap/Container";

import "../styles/HomeBaurppenBild.css";

//Function, um Information eines Bauteiles aus dem Backend zu lesen und zu Render mit dem React Bootstrap
const HomeBaurppenBild = (props) => {
  

  //React Bootstrap bzw. HTML Code für das Ansehen der Information eines Bauteiles
  return (
    <Container className="square border border-1 rounded-3 p-1" sm="auto">
      <img 
          src="/images/Fussboden2.png"
          className="HomeBaurppenBild"
          
          
        />
   
    </Container>
  );
};

export default HomeBaurppenBild;
