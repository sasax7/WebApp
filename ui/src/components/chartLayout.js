
import React, { useState, useEffect } from 'react';
import Chart from './chart';
import Stack from '@mui/material/Stack';
import { ToggleButton, ToggleButtonGroup, Select, MenuItem } from '@mui/material';

const ChartLayout = () => {
  const initialNumCharts = localStorage.getItem('numCharts') || 1;
  const [selectedTool, setSelectedTool] = useState(null);
  const [numCharts, setNumCharts] = useState(initialNumCharts);
  const [selectedChart, setSelectedChart] = useState(null);
  const [layout, setLayout] = useState('row'); 

  useEffect(() => {
    localStorage.setItem('numCharts', numCharts);
  }, [numCharts]);

  const handleToolChange = (event, newTool) => {
    setSelectedTool(newTool);
  };

  const handleNumChartsChange = (event) => {
    setNumCharts(event.target.value);
  };

  const handleChartSelect = (index) => {
    setSelectedChart(index);
  };

  const handleLayoutChange = (event, newLayout) => {
    setLayout(newLayout);
  };

  return (
    <Stack spacing={2} direction="column">
      <ToggleButtonGroup
        value={layout}
        exclusive
        onChange={handleLayoutChange}
      >
        <ToggleButton value="row">Row</ToggleButton>
        <ToggleButton value="column">Column</ToggleButton>
        <ToggleButton value="grid">Grid</ToggleButton>
      </ToggleButtonGroup>
      <Stack spacing={2} direction= "row">
        <Stack spacing={2} direction="column">
          <ToggleButtonGroup
            value={selectedTool}
            exclusive
            onChange={handleToolChange}
            orientation="vertical" 
          >
            <ToggleButton value="trendline">Trendline</ToggleButton>
            <ToggleButton value="horizontalLine">Horizontal Line</ToggleButton>
            <ToggleButton value="verticalLine">Vertical Line</ToggleButton>
          </ToggleButtonGroup>
          <Select value={numCharts} onChange={handleNumChartsChange}>
            {[...Array(8).keys()].map((i) => (
              <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
            ))}
          </Select>
        </Stack>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '100vh' }}>
          {Array(numCharts).fill().map((_, i) => (
            <div key={i} style={{ flex: '1 0 auto', minWidth: '300px' }}>
              <Chart 
                isSelected={i === selectedChart} 
                onSelect={() => handleChartSelect(i)}
              />
            </div>
          ))}
        </div>
      </Stack>
    </Stack>
  );
};

export default ChartLayout;