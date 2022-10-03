import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

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

function App() {
  const [updatedExpenses, setUpdatedExpenses] = useState(expenses);

  const addExpenseHandler = expense => {
    setUpdatedExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={updatedExpenses} />
    </div>
  );
}

export default App;
