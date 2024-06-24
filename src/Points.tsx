/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  TextField,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import './App.css';

function Points() {
  const CPP = 0.025;
  const [points, setPoints] = useState(0);
  const [money, setMoney] = useState(0);
  const [pointsInMoney, setPointsInMoney] = useState('');
  const [moneyInPoints, setMoneyInPoints] = useState(0);

  const handleCalculatePointsInMoney = useCallback(() => {
    const newBalance = points * CPP;
    setPointsInMoney(newBalance.toFixed(2));
  }, [points]);

  const handleCalculateMoneyInPoints = useCallback(() => {
    const newBalance = money / CPP;
    setMoneyInPoints(newBalance);
  }, [money]);

  useEffect(() => {
    handleCalculatePointsInMoney();
  }, [handleCalculatePointsInMoney]);

  useEffect(() => {
    handleCalculateMoneyInPoints();
  }, [handleCalculateMoneyInPoints]);

  function handleOnChangePoints(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    setPoints(Number(value));
  }

  function handleOnChangeMoney(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    setMoney(Number(value));
  }

  function formatPointsForMoney(): JSX.Element {
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(pointsInMoney) || 0);
    return <>equivalem a {formattedValue}</>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <h2>Calculo de pontos para reais</h2>
            <FormControl sx={{ width: '100%' }}>
              <TextField
                label='informe os pontos...'
                variant='standard'
                onChange={handleOnChangePoints}
                type='number'
              />
            </FormControl>
            <strong>{formatPointsForMoney()}</strong>
          </CardContent>
        </Card>
      </Grid>

      <Divider />

      <Grid item xs={6}>
        <Card>
          <CardContent>
            <h2>Calculo de reais para pontos</h2>
            <FormControl sx={{ width: '100%' }}>
              <TextField
                label='informe a quantidade de reais...'
                variant='standard'
                onChange={handleOnChangeMoney}
                type='number'
              />
            </FormControl>
            <strong>equivalem a {moneyInPoints} pontos</strong>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Points;
