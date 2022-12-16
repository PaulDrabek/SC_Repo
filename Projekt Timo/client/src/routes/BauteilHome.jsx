import React from "react";
import BauteilInfo from "../components/BauteilInfo";
import BauteilOptionen from "../components/BauteilOptionen";
import Container from "react-bootstrap/esm/Container";

//Bauteil Information (aus einem ID) URL
const BauteilHome = () => {
  return (
    
    <Container fluid className="bodyContainer px-3">
        <div>
          <BauteilOptionen />
        </div>
        <div>
          <BauteilInfo />
        </div>

    </Container>
    
  );
};

export default BauteilHome;
