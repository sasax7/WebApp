import React, { useState } from 'react';
import TimeframeToggle from './TimeframeToggle';
import Chart from './chart';
import Stack from '@mui/material/Stack';

const ChartLayout = () => {
  const [timeframe, setTimeframe] = useState('1m');

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <Stack spacing={2} direction="column">
      <TimeframeToggle timeframe={timeframe} onTimeframeChange={handleTimeframeChange} />
      <Chart />
    </Stack>
  );
};

export default ChartLayout;