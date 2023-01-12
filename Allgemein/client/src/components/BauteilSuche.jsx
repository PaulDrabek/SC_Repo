import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const BauteilSuche = () => {
  const [bauteilId, setBauteilId] = useState("");
  //definition von navigate, um auf einem URL zu gehen
  let navigate = useNavigate();

  //Function um Aktionen des Endbenutzers auf dem Suchfeld zu steuern, beim Click auf Suche wird das Bauteil ID gesucht.
  const handleSuche = (e, id) => {
    e.preventDefault();
    try {
      if (bauteilId !== "") {
        navigate(`/bauteil/${id}`);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //React Bootstrap bzw. HTML Code für das Ansehen der suchfeld für Bauteile auf dem Home
  return (
        <Row className="mx-0 mt-2 mb-4">
          <Col>
          <Card className="h-100 mx-1 ">
            <Card.Header className="text-center border" as="h4">
              Teilesuche
            </Card.Header>
            <Card.Body className="pt-4 ">
              <Row mx-2 md={3}>                
                <Col className="mb-2">
                  <Form.Group  controlId="formGridState">
                    <Form.Select 
                      size="md"
                      >
                      <option>Typ</option>
                      <option>Bauteil</option>
                      <option>Einzelteil</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col /**/className="mb-2">
                  <Form.Control
                    size="md"
                    value={bauteilId}
                    onChange={(e) => setBauteilId(e.target.value)}
                    type="number"
                    placeholder="ID"
                    required
                  />
                </Col>
                <Col sm={1} className="mb-2">
                  <Button
                    onClick={(e) => handleSuche(e, bauteilId)}
                    type="submit"
                    className="btn btn-primary"
                    size="md"
                  >
                    Suchen
                  </Button>
                </Col>
            </Row>

        </Card.Body>
              </Card>
              </Col>
        </Row>
        
      
   
  );
};

export default BauteilSuche;
