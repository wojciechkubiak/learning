import React from "react";

import ExpenseItem from "./ExpenseItem";
import { IExpense } from "../../App";

import Card from "../Card/Card";
import "./Expenses.css";

interface IExpenses {
  expenses: IExpense[];
}

const Expenses = ({ expenses }: IExpenses) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        id={expenses[0].id}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        id={expenses[1].id}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        id={expenses[2].id}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        id={expenses[3].id}
      />
    </Card>
  );
};

export default Expenses;
