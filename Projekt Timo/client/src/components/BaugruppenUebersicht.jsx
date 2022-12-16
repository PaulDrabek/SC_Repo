import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../styles/BauteilInfo.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";


//Function, um Information eines Bauteiles aus dem Backend zu lesen und zu Render mit dem React Bootstrap
const BaugruppenUebersicht = (props) => {

  let navigate = useNavigate();

  const handleSuche = (e) => {
    e.preventDefault();
    try {
        console.log(e);
        //if(ListgroupElement == "01 - Aufbau") 
         navigate(`/aufbau`);
      
    } catch (err) {
      console.error(err.message);
    }
  };

 

  //React Bootstrap bzw. HTML Code für das Ansehen der Information eines Bauteiles
  return (
      <Row className="mx-0">
        <Col>
          <Card className="h-100 mx-1">
            <Card.Header className="text-center border" as="h4">
              Baugruppen
            </Card.Header>
            <Card.Body className="p-0 ">
            <ListGroup className="rounded-0 " >
              
              <ListGroup.Item action onClick={(e) => handleSuche(e)}>
                01 - Aufbau
              </ListGroup.Item>
              <ListGroup.Item action onClick={(e) => handleSuche(e)}>
                 02 - Innenausbau
              </ListGroup.Item>
              <ListGroup.Item action onClick={(e) => handleSuche(e)}>
                  03 - Stromversorgung
              </ListGroup.Item>
              <ListGroup.Item action onClick={(e) => handleSuche(e)}>
                  04 - Wasserversorgung
              </ListGroup.Item>
              <ListGroup.Item action onClick={(e) => handleSuche(e)}>
                  05 - Sanitäranlagen
              </ListGroup.Item>
              <ListGroup.Item action onClick={(e) => handleSuche(e)}>
                  06 - Heizung
              </ListGroup.Item>
              <ListGroup.Item action onClick={(e) => handleSuche(e)}>
                  07 - Lüftung
              </ListGroup.Item>
            </ListGroup>
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
  );
};

export default BaugruppenUebersicht;
