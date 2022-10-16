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

  const ForgTTotal = parseInt(
    singleLotInfo.ForgingCounterTotal -
      (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) * 1000
  );

  const ForgTPercent = parseFloat(
    ((singleLotInfo.ForgingCounterTotal -
      (singleLotInfo.ForgingScrap / singleLotInfo.singlePartWeight) * 1000) /
      singleLotInfo.eXt) *
      100 -
      100
  ).toFixed(2);

  const PressTTotal = parseInt(
    singleLotInfo.PressingCounterTotal -
      (singleLotInfo.PressingScrap / singleLotInfo.singlePartWeight) * 1000
  );

  const PressTPercent = parseInt(
    (PressTTotal / ForgTTotal) * 100 - 100
  ).toFixed(2);

  const TappTTotal = parseInt(
    singleLotInfo.TappingCounterTotal -
      (singleLotInfo.TappingScrap / singleLotInfo.singlePartWeight) * 1000
  );

  const TappTPercent = parseFloat(
    (TappTTotal / PressTTotal) * 100 - 100
  ).toFixed(2);

  const VSPTTotal = parseInt(
    singleLotInfo.VSPackCounterTotal -
      (singleLotInfo.VSPackScrap / singleLotInfo.singlePartWeight) * 1000
  );

  const VSPTPercent = parseFloat((VSPTTotal / TappTTotal) * 100 - 100).toFixed(
    2
  );

  const infoTable = singleLotInfo ? (
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell>{singleLotInfo.eXt}</Table.Cell>
      <Table.Cell>
        {singleLotInfo.ForgingCounterTotal}
        <hr />
        {ForgTTotal} / {ForgTPercent}
      </Table.Cell>
      <Table.Cell>
        {singleLotInfo.PressingCounterTotal} <hr />
        {PressTTotal} / {PressTPercent}
      </Table.Cell>
      <Table.Cell>
        {singleLotInfo.TappingCounterTotal}
        <hr />
        {TappTTotal} / {TappTPercent}
      </Table.Cell>
      <Table.Cell>
        {singleLotInfo.VSPackCounterTotal}
        <hr />
        {VSPTTotal} / {VSPTPercent}
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
      <TestBarEx
        t1Data={[
          ForgTTotal,
          PressTTotal,
          TappTTotal,
          VSPTTotal,
          singleLotInfo.eXt,
        ]}
      />
    </div>
  );
};

export default DetailID;
