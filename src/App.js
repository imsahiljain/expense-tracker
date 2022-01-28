import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Form from "./components/form/form";
import ExpenseContainer from "./components/expense-container/expense-container";
import EXPENSES_DATA from "./expense-data.js";

const getLocalData = () => {
  let items = localStorage.getItem("expenses");
  if (items) {
    return JSON.parse(localStorage.getItem("expenses"));
  } else {
    return [];
  }
};

const App = () => {
  const [data, setData] = useState(getLocalData());

  const getNewData = (newExpenseData) => {
    const newData = {
      id: Math.random(),
      ...newExpenseData,
    };
    setData((prevState) => {
      return [newData, ...prevState];
    });
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Navbar />
      <Form getNewData={getNewData} />
      <ExpenseContainer expenses={data} />
    </>
  );
};

export default App;
