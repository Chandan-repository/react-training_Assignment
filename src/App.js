import React from 'react';
import ExpenseItem from './ExpenseItem';
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
    },
  ];
  return (
    <div>
      <h2>Let's get Started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <p>ALL Expense Item!!!!</p>
    </div>
  );
}
