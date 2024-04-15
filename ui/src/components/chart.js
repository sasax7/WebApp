// Chart.js
import React, { useEffect, useRef, useState } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import data from './data.json';
import TimeframeToggle from './TimeframeToggle';

function ChartComponent({ isSelected, onSelect }) {
  const [timeframe, setTimeframe] = useState(1);
  const chartContainerRef = useRef();
  const candleSeriesRef = useRef();

  const aggregateData = (data, timeframe) => {
    const result = [];
    const timeframeInElements = timeframe * 60; 
    for (let i = 0; i < data.length; i += timeframeInElements) {
      const chunk = data.slice(i, i + timeframeInElements);
      if (chunk.length > 0) {
        result.push({
          time: Math.floor(chunk[0].date / 1000),
          open: chunk[0].open,
          high: Math.max(...chunk.map(c => c.high)),
          low: Math.min(...chunk.map(c => c.low)),
          close: chunk[chunk.length - 1].close,
        });
      }
    }
    return result;
  };

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, { 
      width: chartContainerRef.current.offsetWidth, 
      height: chartContainerRef.current.offsetHeight,
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });
    candleSeriesRef.current = chart.addCandlestickSeries();

    return () => {
      chart.remove();
      candleSeriesRef.current = null;
    };
  }, []);

  useEffect(() => {
    const formattedData = aggregateData(data.data, timeframe);
    if (candleSeriesRef.current) {
      candleSeriesRef.current.setData(formattedData);
    }
  }, [timeframe]);

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(Number(newTimeframe));
  };

  return (
    <div 
      ref={chartContainerRef} 
      style={{ 
       width: '100%',
        height: '100%', 
        minHeight: '600px',
        border: isSelected ? '2px solid blue' : '1px solid gray' 
      }} 
      onClick={onSelect}
    >
      <TimeframeToggle timeframe={timeframe} onTimeframeChange={handleTimeframeChange} />
    </div>
  );
}

export default ChartComponent;