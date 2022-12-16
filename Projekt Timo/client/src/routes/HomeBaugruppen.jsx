import React, { useContext } from "react";
import BauteilSuche from "../components/BauteilSuche";
import { BauteilContext } from "../context/BauteilContext";
import Container from "react-bootstrap/esm/Container";
import "../styles/Body.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import BaugruppenUebersicht from "../components/BaugruppenUebersicht";
import HomeBaurppenBild from "../components/HomeBaurppenBild";


//Homes des Websites URL
const Home = () => {
  const { userData } = useContext(BauteilContext);
  console.log(userData.benutzername);
  return (
    
    <Container fluid className="bodyContainer">
      <div>
        <h1 className="text-center mb-4">Herzlich Willkommen {userData.benutzername} !</h1>
      </div>
      <Row>
        <Col><HomeBaurppenBild/></Col>
        <Col className="square border border-1 rounded-3 p-1">
          <BauteilSuche/>
          
          <BaugruppenUebersicht/>
        
        </Col>
      



      </Row>

      
      
    </Container>
  );
};

export default Home;
