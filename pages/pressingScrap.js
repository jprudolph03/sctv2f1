import React, { useEffect, useState } from "react";
import { Button, Card, Header, Form, Container } from "semantic-ui-react";

import PressingReportForm from "../components/PressingReportForm";

const pressingScrap = () => {
  const [currentPressingLots, setCurrentPressingLots] = useState([]);
  useEffect(() => {
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setCurrentPressingLots(data.data);
      });
  }, []);
  const PressingReady = currentPressingLots?.filter(
    (l) => l.PressingCounterTotal == undefined
  );
  const pCards = PressingReady?.map((lot) => (
    <Card key={lot._id}>
      <Card.Content>
        <Card.Header>{lot.num}</Card.Header>
        <Card.Meta>{lot.partName}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <PressingReportForm lotID={lot._id} />
      </Card.Content>
    </Card>
  ));
  return (
    <Container fluid>
      <Header as="h1">Active Pressing</Header>
      <Card.Group>{pCards}</Card.Group>
    </Container>
  );
};

export default pressingScrap;
