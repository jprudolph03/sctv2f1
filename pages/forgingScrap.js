import React, { useEffect, useState } from "react";
import { Button, Card, Header, Form, Container } from "semantic-ui-react";

import ReportForm from "../components/ReportForm";

const forgingScrap = () => {
  const [currentForgingLots, setCurrentForgingLots] = useState([]);
  useEffect(() => {
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setCurrentForgingLots(data.data);
      });
  }, []);

  const forgingReady = currentForgingLots?.filter(
    (l) => l.ForgingCounterTotal == undefined
  );

  const fCards = forgingReady?.map((lot) => (
    <Card key={lot._id}>
      <Card.Content>
        <Card.Header>{lot.num}</Card.Header>
        <Card.Meta>{lot.partName}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <ReportForm lotID={lot._id} />
      </Card.Content>
    </Card>
  ));
  return (
    <Container fluid>
      <Header as="h1">Active Forging</Header>
      <Card.Group>{fCards}</Card.Group>
    </Container>
  );
};

export default forgingScrap;
