import { React, useState } from "react";
import "./style.css";
import ExpenseItem from './components/ExpenseItem';
import Test from "./components/Test";


export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.76,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Wooden Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <ExpenseItem title="Toilet Paper" price="94.12" month="August" year="2020" day="14"/>
      {/* <Test /> */}
    </div>
  );
}