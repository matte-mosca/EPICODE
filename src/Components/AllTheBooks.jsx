import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasyBooks from "./fantasy.json";
import { Col, Container, Row } from "react-bootstrap";

function Cards() {
  return (
    <Container className="mt-5">
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {fantasyBooks.map((Book) => {
        return (
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src= {Book.img} />
              <Card.Body>
                <Card.Title>{Book.title}</Card.Title>
                <Card.Text>
                  Price: {Book.price} $
                </Card.Text>
                <Button variant="primary">Buy Book</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
    </Container>
  );
}

export default Cards;
