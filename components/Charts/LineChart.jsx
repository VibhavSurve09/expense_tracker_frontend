import { MonitorSharp } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Chart as ChartJS } from 'chart.js/auto';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { months } from '../../utils';
import { months_avg } from '../../utils';
function LineChart({ _chartdata }) {
  let months_avg = new Map();
  const [chartData, setChartData] = useState({
    labels: months,
    datasets: [
      {
        label: 'Credit Expense',
        //Average Of months expense are should be there
        data: Array.from(months_avg.values()),
      },
    ],
  });

  return (
    <Box>
      <Line data={chartData} />
    </Box>
  );
}

export default LineChart;
