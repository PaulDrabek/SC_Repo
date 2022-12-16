import React from "react";
import "./Bottom.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";



//Fußzeile als Komponente
const Bottom = () => {
 return (
    <div className="main-footer">
      <Container fluid className="containerBottom">
        <Row>
          <Col className="text-end">
            <img
              src="/images/logoNeuWhite.png"
              alt="Wooden Valley Logo"
              height="55"
              className="d-inline-block align-top"
            />
          </Col>
          <Col className="text-start">
            <p>WoodenValley gGmbH</p>
            
            In Verantwortungseigentum
            <br/> 
            Quellenstraße 7a
            <br/> 
            70376 Stuttgart
            
          </Col>
          
        </Row>
        <Row>
          <Col xs={3}>Als gemeinnütziges Unternehmen in Verantwortungseigentum nehmen wir das Cradle 2 Cradle Prinzip als Leitmotiv für unsere Vorhaben und stellen damit die Klimapositivität in den Mittelpunkt all unserer Handlungen.</Col>
          
          <Col></Col>
        </Row>
        <Row>
         <Col className="text-center">
          © 2022 WoodenValley gGmbH | <a href="/Datenschutz">Datenschutz</a> | <a href="/Impressum">Impressum</a>
          </Col>
        </Row>

      </Container>
      </div>
  );
};

export default Bottom;

