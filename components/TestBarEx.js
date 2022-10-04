import React from "react";
import { Grid, Segment, Header } from "semantic-ui-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import LossDeptChart from "./LossDeptChart";
import FeltCuteChart from "./FeltCuteChart";
const TestBarEx = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Loss Something Just fake data",
      },
    },
  };

  const labels = [
    "Expected Total",
    "Forging",
    "Pressing",
    "Tapping",
    "VS/Packing",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "100%",
        data: labels.map(() =>
          faker.datatype.number({ min: 89000, max: 100000 })
        ),
        backgroundColor: " rgba(55, 202, 87, 0.8)",
      },
      {
        label: "Final",
        data: labels.map(() =>
          faker.datatype.number({ min: 75000, max: 90000 })
        ),
        backgroundColor: "rgba(214, 40, 40, 0.8)",
      },
    ],
  };
  return (
    <>
      <Grid columns="equal">
        <Grid.Column width={8}>
          <Bar data={data} height={0.7} width={0.7} options={options} />
        </Grid.Column>

        <Grid.Column width={8}>
          <Segment>
            <Header as="h2">Loss By Dept</Header>
            <LossDeptChart />
          </Segment>
        </Grid.Column>
        {/* <Grid.Column width={8}>
          <Segment>
            <Header as="h2">Felt Cute</Header>
            <FeltCuteChart />
          </Segment>
        </Grid.Column> */}
      </Grid>
    </>
  );
};

export default TestBarEx;
