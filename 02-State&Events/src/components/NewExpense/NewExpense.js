
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css";

function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const data = {
            ...enteredExpenseData,
            id: Math.random()
        }

        props.onAddExpense(data)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;