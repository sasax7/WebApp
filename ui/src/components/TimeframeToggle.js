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
      <ToggleButton value={1}>1m</ToggleButton>
      <ToggleButton value={5}>5m</ToggleButton>
      <ToggleButton value={15}>15m</ToggleButton>
      <ToggleButton value={60}>1h</ToggleButton>
      <ToggleButton value={240}>4h</ToggleButton>
      <ToggleButton value={1440}>1d</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TimeframeToggle;