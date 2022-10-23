import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { OBJECTS, OPTIONS } from '../../constants';
  import { FC } from 'react';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  const LineChart = (props) => {
    const { labels, vehicles } = props;
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: OBJECTS.carsTrucks,
          data: vehicles[0] ? vehicles[0].map((vehicle) => vehicle) : [],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
        {
          label: OBJECTS.people,
          data: vehicles[2] ? vehicles[2].map((vehicle) => vehicle) : [],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 1)',
        },
        {
          label: OBJECTS.bicycles,
          data: vehicles[1] ? vehicles[1].map((vehicle) => vehicle) : [],
          borderColor: 'rgb(255, 255, 255)',
          backgroundColor: 'rgb(255, 255, 255, 1)',
        },
      ],
    };
  
    return (
      <Line options={OPTIONS} data={data}/>
    );
  }
  
  
  export default LineChart;