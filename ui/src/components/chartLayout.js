// ChartLayout.js
import React, { useState, useEffect } from 'react';
import Chart from './chart';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import TradeInputs from './TradeInputs';

const ChartLayout = () => {
  const initialNumCharts = localStorage.getItem('numCharts') || 1;
  const [numCharts, setNumCharts] = useState(initialNumCharts);
  const [selectedChart, setSelectedChart] = useState(null);
  const [layout, setLayout] = useState('row'); 

  useEffect(() => {
    localStorage.setItem('numCharts', numCharts);
  }, [numCharts]);

  const handleNumChartsChange = (event) => {
    setNumCharts(event.target.value);
  };

  const handleChartSelect = (index) => {
    setSelectedChart(index);
  };

  const handleLayoutChange = (event) => {
    setLayout(event.target.value);
  };

  const charts = Array.from({ length: numCharts }, (_, i) => (
    <Chart 
      key={i} 
      isSelected={i === selectedChart} 
      onSelect={() => handleChartSelect(i)}
    />
  ));

  return (
    <Stack spacing={2} direction="column">
      <Stack direction="row" spacing={2}>
        <FormControl>
          <InputLabel id="num-charts-label">Number of Charts</InputLabel>
          <Select
            labelId="num-charts-label"
            id="num-charts-select"
            value={numCharts}
            onChange={handleNumChartsChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="layout-label">Layout</InputLabel>
          <Select
            labelId="layout-label"
            id="layout-select"
            value={layout}
            onChange={handleLayoutChange}
          >
            <MenuItem value="row">Row</MenuItem>
            <MenuItem value="column">Column</MenuItem>
            <MenuItem value="grid">Grid</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      {layout === 'row' && <Stack direction="row">{charts}</Stack>}
      {layout === 'column' && <Stack direction="column">{charts}</Stack>}
      {layout === 'grid' && <Grid container spacing={2}>{charts.map((chart, i) => <Grid item xs={6} key={i}>{chart}</Grid>)}</Grid>}
      <TradeInputs />
    </Stack>
  );
};

export default ChartLayout;