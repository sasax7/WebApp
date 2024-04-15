import React, { useState } from 'react';
import { Button, TextField, Box, Stack } from '@mui/material';

const TradeInputs = () => {
  const [entry, setEntry] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');
  const [risk, setRisk] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <Stack spacing={2} direction="column">
        <TextField label="Entry" type="number" value={entry} onChange={(e) => setEntry(e.target.value)} />
        <TextField label="Stop Loss" type="number" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} />
        <TextField label="Take Profit" type="number" value={takeProfit} onChange={(e) => setTakeProfit(e.target.value)} />
        <TextField label="Risk (%)" type="number" value={risk} onChange={(e) => setRisk(e.target.value)} />
        <Button type="submit" variant="contained">Submit</Button>
      </Stack>
    </Box>
  );
};

export default TradeInputs;