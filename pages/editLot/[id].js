import React, { useEffect, useState } from "react";
import { Container, Header, Form, Button } from "semantic-ui-react";
import { useRouter } from "next/router";

const EditLot = ({ lotID }) => {
  const router = useRouter();
  const [editLot, setEditLot] = useState([]);

  // `https://scrap-tracker.herokuapp.com/api/lot/${router.query.id}`;
  useEffect(() => {
    const getLot = async () => {
      const lot = await fetch(
        `https://scrap-tracker.herokuapp.com/api/lot/${router.query.id}`,
        {
          method: "GET",
          mode: "cors",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setEditLot(data.data);
        });
    };
    getLot();
  }, [router.query.id]);

  const handleLotUpdate = async (e) => {
    e.preventDefault();
    const data = {
      totalCoilWeight: e.target[0].value,
      singlePartWeight: e.target[1].value,
      ForgingCounterTotal: e.target[2].value,
      ForgingScrap: e.target[3].value,
      PressingCounterTotal: e.target[4].value,
      PressingScrap: e.target[5].value,
      TappingCounterTotal: e.target[6].value,
      TappingScrap: e.target[7].value,
      VSPackCounterTotal: e.target[8].value,
      VSPackScrap: e.target[9].value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = `https://scrap-tracker.herokuapp.com/api/lot/${router.query.id}`;

    const options = {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    console.log(response);
    const result = await response.json();

    if (result) {
      router.push("/");
    }
  };

  return (
    <Container fluid>
      <Header as="h1">
        {" "}
        Edit Lot: {editLot.num}
        <Header sub>{editLot.partName}</Header>
      </Header>

      <Form onSubmit={handleLotUpdate}>
        <Form.Field>
          <label>Coil Weight:</label>
          <input placeholder={editLot.totalCoilWeight} />
        </Form.Field>
        <Form.Field>
          <label>Single Part Weight:</label>
          <input placeholder={editLot.singlePartWeight} />
        </Form.Field>
        <hr />
        <Form.Field>
          <label>Forging Counter Total:</label>
          <input placeholder={editLot.ForgingCounterTotal} />
        </Form.Field>
        <Form.Field>
          <label>Forging Scrap Weight:</label>
          <input placeholder={editLot.ForgingScrap} />
        </Form.Field>
        <Form.Field>
          <label>Pressing Counter Total: </label>
          <input placeholder={editLot.PressingCounterTotal} />
        </Form.Field>
        <Form.Field>
          <label>Pressing Scrap Weight: </label>
          <input placeholder={editLot.PressingScrap} />
        </Form.Field>
        <Form.Field>
          <label>Tapping Counter Total: </label>
          <input placeholder={editLot.TappingCounterTotal} />
        </Form.Field>
        <Form.Field>
          <label>Tapping Scrap Weight: </label>
          <input placeholder={editLot.TappingScrap} />
        </Form.Field>
        <Form.Field>
          <label>VS / Pack "Counter Total": </label>
          <input placeholder={editLot.VSPackCounterTotal} />
        </Form.Field>
        <Form.Field>
          <label>VS / Pack "Scrap Weight": </label>
          <input placeholder={editLot.VSPackScrap} />
        </Form.Field>
        <Button basic color="orange">
          Update Lot
        </Button>
      </Form>
    </Container>
  );
};

export default EditLot;
