// chart.js
import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { chartData } from './chartData';

const Chart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, { width: 400, height: 400 });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(chartData);
  }, []);

  return <div ref={chartContainerRef} />;
};

export default Chart;