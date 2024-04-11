import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const TimeframeToggle = ({ timeframe, onTimeframeChange }) => {
  const handleTimeframeChange = (event, newTimeframe) => {
    if (newTimeframe !== null) {
      onTimeframeChange(newTimeframe);
    }
  };

  return (
    <ToggleButtonGroup
      value={timeframe}
      exclusive
      onChange={handleTimeframeChange}
    >
      <ToggleButton value="1m">1m</ToggleButton>
      <ToggleButton value="5m">5m</ToggleButton>
      <ToggleButton value="15m">15m</ToggleButton>
      <ToggleButton value="1h">1h</ToggleButton>
      <ToggleButton value="4h">4h</ToggleButton>
      <ToggleButton value="1d">1d</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TimeframeToggle;