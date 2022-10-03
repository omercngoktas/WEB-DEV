import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
import { useState } from 'react';

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const newExpenses = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(newExpenses);
        setAddNewExpense(<AddNewExpense addNewExpense={addNewExpenseHandler}/>);
    };

    const cancelNewExpense = () => {
        setAddNewExpense(<AddNewExpense addNewExpense={addNewExpenseHandler}/>);
    }

    const addNewExpenseHandler = () => {
        setAddNewExpense(<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={cancelNewExpense}/>);
    }

    const [addNewExpense, setAddNewExpense] = useState(<AddNewExpense addNewExpense={addNewExpenseHandler}/>);

    return (
        <div className="new-expense">
            {addNewExpense}
        </div>
    );
}

export default NewExpense;