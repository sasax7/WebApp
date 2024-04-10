// chart.js
import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, { width: 400, height: 400 });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData([
      { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
      { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
      // More data...
    ]);
  }, []);

  return <div ref={chartContainerRef} />;
};

export default Chart;