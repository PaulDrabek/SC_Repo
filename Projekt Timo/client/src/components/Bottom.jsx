import React from "react";
import "../styles/Bottom.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";



//Fußzeile als Komponente
const Bottom = () => {
 return (
    <div className="main-footer">
      <Container fluid className="containerBottom">
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

