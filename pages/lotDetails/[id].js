import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Icon, Label, Menu, Table, Header } from "semantic-ui-react";
import TestBarEx from "../../components/TestBarEx";

const DetailID = () => {
  const router = useRouter();

  const [singleLotInfo, setSingleLotInfo] = useState([]);

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
          setSingleLotInfo(data.data);
        });
      //   console.log(lot);
    };
    getLot();
  }, [router.query.id]);

  const infoTable = singleLotInfo ? (
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell>{singleLotInfo.eXt}</Table.Cell>
      <Table.Cell>
        {singleLotInfo.ForgingCounterTotal}
        <hr />
        {parseInt(
          singleLotInfo.ForgingCounterTotal -
            (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) * 1000
        )}{" "}
        /{" "}
        {parseFloat(
          ((singleLotInfo.ForgingCounterTotal -
            (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) *
              1000) /
            singleLotInfo.eXt) *
            100 -
            100
        ).toFixed(2)}
      </Table.Cell>
      <Table.Cell>
        {singleLotInfo.PressingCounterTotal} <hr />
        {parseInt(
          singleLotInfo.ForgingCounterTotal -
            (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) * 1000
        )}{" "}
        /{" "}
        {parseFloat(
          ((singleLotInfo.ForgingCounterTotal -
            (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) *
              1000) /
            singleLotInfo.eXt) *
            100 -
            100
        ).toFixed(2)}
      </Table.Cell>
      <Table.Cell>
        {singleLotInfo.TappingCounterTotal}
        <hr />
        {parseInt(
          singleLotInfo.ForgingCounterTotal -
            (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) * 1000
        )}{" "}
        /{" "}
        {parseFloat(
          ((singleLotInfo.ForgingCounterTotal -
            (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) *
              1000) /
            singleLotInfo.eXt) *
            100 -
            100
        ).toFixed(2)}
      </Table.Cell>
      <Table.Cell>
        {singleLotInfo.VSPackCounterTotal}
        <hr />
        {parseInt(
          singleLotInfo.ForgingCounterTotal -
            (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) * 1000
        )}{" "}
        /{" "}
        {parseFloat(
          ((singleLotInfo.ForgingCounterTotal -
            (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) *
              1000) /
            singleLotInfo.eXt) *
            100 -
            100
        ).toFixed(2)}
      </Table.Cell>
    </Table.Row>
  ) : null;

  return (
    <div>
      <Header as="h1">
        {" "}
        Lot: {singleLotInfo.num}
        <Header sub>{singleLotInfo.partName}</Header>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Expected Total</Table.HeaderCell>
            <Table.HeaderCell>Forging Counter</Table.HeaderCell>
            <Table.HeaderCell>Presing Counter</Table.HeaderCell>
            <Table.HeaderCell>Tapping Counter</Table.HeaderCell>
            <Table.HeaderCell>VS/Pack Counter</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{infoTable}</Table.Body>
      </Table>
      <TestBarEx />
    </div>
  );
};

export default DetailID;
