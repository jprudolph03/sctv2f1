import React, { useState, useEffect } from "react";
import { Button, Card, Header, Form, Container } from "semantic-ui-react";
import TappingReportForm from "../components/TappingReportForm";

const tappingScrap = () => {
  const [currentTappingLots, setCurrentTappingLots] = useState([]);
  useEffect(() => {
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTappingLots(data.data);
      });
  }, []);
  const TappingReady = currentTappingLots?.filter(
    (l) => l.TappingCounterTotal == undefined
  );
  const tapCards = TappingReady?.map((lot) => (
    <Card key={lot._id}>
      <Card.Content>
        <Card.Header>{lot.num}</Card.Header>
        <Card.Meta>{lot.partName}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <TappingReportForm lotID={lot._id} />
      </Card.Content>
    </Card>
  ));
  return (
    <div>
      <Container fluid>
        <Header as="h1">Active Tapping</Header>
        <Card.Group>{tapCards}</Card.Group>
      </Container>
    </div>
  );
};

export default tappingScrap;
