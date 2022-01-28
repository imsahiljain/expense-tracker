import React from "react";
import ExpenseCard from "../expense-card/expense-card";

const ExpenseContainer = (props) => {
  return (
    <div>
      {props.expenses.map((expense) => {
        return (
          <ExpenseCard
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpenseContainer;
