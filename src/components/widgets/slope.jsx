import React from 'react';
import { Line } from 'react-chartjs-2';
import fill from 'lodash/fill';
import random from 'lodash/random';

const generateRandomArray = (length) => {
  const names = fill(Array(length), 0);
  return names.reduce((acc, item) => {
    acc.push(random(50, 100));
    return acc;
  }, [])
}
const chartLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chartData = generateRandomArray(10);

const data = {
  labels: chartLabels,
  datasets: [
    {
      label: 'summit',
      data: chartData,
      fill: false,
      backgroundColor: 'transparent',
      borderColor: 'green',
      pointBorderColor: 'transparent',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
  scales: {
    ticks: false,
    scaleShowLabels: false,
    xAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: { display: false, beginAtZero: true },
        gridLines: {
          display: false,
        },
      },
    ],
  },
}

const Slope = () => {
  return (
    <div className='inline'>
      <div>
        <div className='legend'>$209.83K</div>
        <div>Todays Account (5) Balance</div>
      </div>
      <div style={{ height: '60px', width: '100px' }}>
        <Line data={data} options={options} height='45px' width='45px' />
      </div>
    </div>    
  );
}

export default Slope;