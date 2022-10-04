import React, { useState, useEffect } from "react";
import { Button, Card, Header, Form, Container } from "semantic-ui-react";
import VSPackReportForm from "../components/VSPackReportForm";

const vsPackScrap = () => {
  const [currentVSPackLots, setCurrentVSPackLots] = useState([]);
  useEffect(() => {
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setCurrentVSPackLots(data.data);
      });
  }, []);

  const VSPackReady = currentVSPackLots?.filter(
    (l) => l.VSPackCounterTotal == undefined
  );
  const vsPackCards = VSPackReady?.map((lot) => (
    <Card key={lot._id}>
      <Card.Content>
        <Card.Header>{lot.num}</Card.Header>
        <Card.Meta>{lot.partName}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <VSPackReportForm lotID={lot._id} />
      </Card.Content>
    </Card>
  ));

  return (
    <Container fluid>
      <Header as="h1">Active VS/Packing</Header>
      <Card.Group>{vsPackCards}</Card.Group>
    </Container>
  );
};

export default vsPackScrap;
