import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";
import "./ExpenseItem.css";
import { IExpense } from "../../App";

const ExpenseItem = ({ date, title, amount }: IExpense) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
