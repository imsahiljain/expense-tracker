import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Form from "./components/form/form";
import ExpenseContainer from "./components/expense-container/expense-container";
import EXPENSES_DATA from "./expense-data.js";

const App = () => {
  const [data, setData] = useState();

  const getNewData = (newExpenseData) => {
    const newData = {
      id: Math.random(),
      ...newExpenseData,
    };
    setData((prevState) => {
      return [newData, ...prevState];
    });
  };

  return (
    <>
      <Navbar />
      <Form getNewData={getNewData} />
      <ExpenseContainer expenses={data} />
    </>
  );
};

export default App;
