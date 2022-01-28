import React from "react";
import ExpenseCard from "../expense-card/expense-card";

const ExpenseContainer = () => {
  return (
    <>
      <ExpenseCard expenseName="Grocery" amount="300" date="13 feb" />
      <ExpenseCard expenseName="sas" amount="300" date="13 feb" />
      <ExpenseCard expenseName="sasasasa" amount="300" date="13 feb" />
      <ExpenseCard expenseName="sasasasasa" amount="300" date="13 feb" />
    </>
  );
};

export default ExpenseContainer;
