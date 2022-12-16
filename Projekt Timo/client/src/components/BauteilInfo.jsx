import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import PathFinder from "../apis/PartFinder";
import { BauteilContext } from "../context/BauteilContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "../styles/BauteilInfo.css";

//Function, um Information eines Bauteiles aus dem Backend zu lesen und zu Render mit dem React Bootstrap
const BauteilInfo = (props) => {
  //lies die ID aus dem Route URL
  const { id } = useParams();
  //nimmt die Variable Bauteilinformation aus dem Context  ohne Werte
  const { bauteil, setBauteil } = useContext(BauteilContext);

  //function um auf dem Backend die Information eines Bauteiles mit dem ID zu lesen und in dem Context zu setzen
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PathFinder.get(`/${id}`);
        setBauteil(response.data.data.bauteil[0]);
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  //React Bootstrap bzw. HTML Code für das Ansehen der Information eines Bauteiles
  return (
    <Container className="square border border-1 rounded-3 p-1" sm="auto">
      <Row className="d-flex py-2 mx-0">
        <h1 className="text-center">{bauteil.bauteil_name}</h1>
      </Row>
      <Row className="mx-0">
        <Col>
          <Card className="h-100 mx-1">
            <Card.Header className="text-center" as="h3">
              Beschreibung
            </Card.Header>
            <Card.Body>
              <p className="text-justify fs-3">
                {bauteil.bauteil_beschreibung}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mx-1">
            <Card.Header className="text-center" as="h3">
              Bild
            </Card.Header>
            <Card.Img
              className="p-1"
              alt={bauteil.bauteil_name}
              variant="bottom"
              src={bauteil.bauteil_bild}
            ></Card.Img>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BauteilInfo;
