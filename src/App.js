import React from 'react';
import Expenses from './Expenses';
import './style.css';

export default function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      title: 'News Paper',
      amount: 300,
      date: new Date(2021, 7, 21),
    },
    {
      title: 'HomeLoan',
      amount: 2000,
      date: new Date(2021, 3, 24),
    }
  ];
  return (
    <div>
      <h2>Let's get Started</h2>
      <Expenses items={expenses}/>
    </div>
  );
}
