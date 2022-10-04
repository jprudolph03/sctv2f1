import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const LossDeptChart = () => {
  const data = {
    backgroudColor: [
      "rgb(57, 0, 153)",
      "rgb(158, 0, 89)",
      "rgb(255, 0, 84)",
      "rgb(255, 84, 0)",
    ],
    labels: ["Forging", "Pressing", "Tapping", "VS/Pack"],
    datasets: [
      {
        label: "Somedubmhere",
        data: [300, 50, 100, 300],
        backgroundColor: [
          "rgb(57, 0, 153)",
          "rgb(158, 0, 89)",
          "rgb(255, 0, 84)",
          "rgb(255, 84, 0)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    elements: {
      arch: {
        weight: 0.5,
        borderWidth: 3,
      },
    },
    cutout: 150,
  };

  return (
    <>
      <Doughnut data={data} width={50} height={50} options={options} />
    </>
  );
};

export default LossDeptChart;
