import React from "react";
import { AreaChartCard } from "react-sensei";

const series = [
  {
    name: "series1",
    data: [0, 35, 10, 44, 10, 0, 0],
  },
  {
    name: "series2",
    data: [0, 5, 35, 10, 64, 10, 0],
  },
  {
    name: "series3",
    data: [0, 20, 10, 30, 20, 28, 0],
  },
];

const statList = [
  {
    label: "Total",
    value: "34hrs",
  },
  {
    label: "Average",
    value: "3hrs",
  },
  {
    label: "Courses",
    value: "5",
  },
];

export default () => {
  return (
    <div className="col-lg-8 offset-lg-2">
      <AreaChartCard cardTitle="Learning hours" statList={statList} series={series} />
    </div>
  );
};