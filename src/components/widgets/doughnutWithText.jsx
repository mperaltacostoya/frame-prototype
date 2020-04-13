import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      data: [20, 80],
      backgroundColor: ['#f4f4f4', '#377d28'],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  },
  cutoutPercentage: 75,
  tooltips: false,
}

const DoughnutChartWithText = () => {
  return (
    <div className='health-outer'>
      <div className='health-inner'>
          <h1 className='legend percent-legend'>
            80%
          </h1>
          <span className='text-legend'>
            on track
          </span>
        </div>
      <Doughnut
        data={data}
        options={options}
				width={400}
        height={400}
				/>
    </div>
  );
}
  
export default DoughnutChartWithText;
