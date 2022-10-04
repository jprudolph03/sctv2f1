import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Table, Header, Icon, Step, StepContent } from "semantic-ui-react";

// https://scrap-tracker.herokuapp.com/api/lot/lotDetails/${lot._id}

const ROUTE_LOT_ID = "lotDetails/[id]";
const ROUTE_EDIT_LOT = "editLot/[id]";

const ActiveLotTable = () => {
  const [activeLots, setActiveLots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //find all lots ++later change to only active lots++
  useEffect(() => {
    setIsLoading(true);
    fetch("https://scrap-tracker.herokuapp.com/api/lot")
      .then((res) => res.json())
      .then((data) => {
        setActiveLots(data.data);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteLot = ({ id }) => {
    console.log(id, "blah blah");
  };

  const gTable = activeLots?.map((lot) => (
    <Table.Row key={lot._id}>
      <Table.Cell>
        <a href={`https://scrap-tracker.herokuapp.com/api/lot/${lot._id}`}>
          {lot.num} | {lot.partName}
        </a>
      </Table.Cell>
      <Table.Cell>{lot.eXt}</Table.Cell>
      <Table.Cell>
        {parseInt(
          lot.ForgingCounterTotal -
            (lot.ForgingScrap / lot.singlePartWeight) * 1000
        )}
        {/* <span>
          ({" "}
          {parseFloat(
            ((lot.ForgingCounterTotal -
              (lot.ForgingScrap / lot.singlePartWeight) * 1000) /
              lot.eXt) *
              100 -
              100,
            2
          ).toFixed(2)}{" "}
          % )
        </span> */}
      </Table.Cell>
      <Table.Cell>
        {parseInt(
          lot.PressingCounterTotal -
            (lot.PressingScrap / lot.singlePartWeight) * 1000
        )}
        {/* <span>
          {parseFloat(
            ((lot.PressingCounterTotal -
              (lot.PressingScrap / lot.singlePartWeight) * 1000) /
              lot.eXt) *
              100 -
              100,
            2
          ).toFixed(2)}{" "}
          %
        </span> */}
      </Table.Cell>
      <Table.Cell>
        {parseInt(
          lot.TappingCounterTotal -
            (lot.TappingScrap / lot.singlePartWeight) * 1000
        )}
        {/* <span>
          {parseFloat(
            ((lot.TappingCounterTotal -
              (lot.TappingScrap / lot.singlePartWeight) * 1000) /
              lot.eXt) *
              100 -
              100
          ).toFixed(2)}{" "}
          %
        </span> */}
      </Table.Cell>
      <Table.Cell>
        {lot.VSPackCounterTotal}
        {/* <span>
          {parseFloat(
            ((lot.VSPackCounterTotal -
              (lot.VSPackScrap / lot.singlePartWeight) * 1000) /
              lot.eXt) *
              100 -
              100
          ).toFixed(2)}{" "}
          %
        </span> */}
      </Table.Cell>
      <Table.Cell>
        <Link
          href={{
            pathname: ROUTE_LOT_ID,
            query: { id: lot._id },
          }}
        >
          <Icon name="eye" color="blue" bordered size="large"></Icon>
        </Link>
        <Link
          href={{
            pathname: ROUTE_EDIT_LOT,
            query: { id: lot._id },
          }}
        >
          <Icon name="edit" color="green" bordered size="large"></Icon>
        </Link>
        <Icon name="file outline" color="orange" bordered size="large"></Icon>
        <Link
          href={{
            method: "DELETE",
            query: { id: lot._id },
          }}
        >
          <Icon
            name="delete"
            onClick={handleDeleteLot}
            color="red"
            bordered
            size="large"
          ></Icon>
        </Link>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <div style={{ marginTop: "5em" }}>
      <div>
        <Header as="h1">Current Lots</Header>
      </div>
      <Table unstackable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lot #</Table.HeaderCell>
            <Table.HeaderCell>100%</Table.HeaderCell>
            <Table.HeaderCell>Forging</Table.HeaderCell>
            <Table.HeaderCell>Pressing</Table.HeaderCell>
            <Table.HeaderCell>Tapping</Table.HeaderCell>
            <Table.HeaderCell>VS / Pack</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{gTable}</Table.Body>
      </Table>
    </div>
  );
};

export default ActiveLotTable;
