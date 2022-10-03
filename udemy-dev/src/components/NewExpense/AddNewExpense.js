import React, { useState } from "react";
import "./AddNewExpense.css";

const AddNewExpense = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        props.addNewExpense();
    };

    return (
        <div>
            <form onSubmit={submitHandler} >
                <button>Add New Expense</button>
            </form>
        </div>
    );
}

export default AddNewExpense;