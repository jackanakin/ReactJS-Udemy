import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from '../UI/Card';
import "./Expense.css";

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map((expense, index) => <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>
    )
}

export default Expense;