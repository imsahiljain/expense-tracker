import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Form from "./components/form/form";
import ExpenseContainer from "./components/expense-container/expense-container";
import Filter from "./components/filter/filter";

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

  const [year, setYear] = useState("2022");
  const getYear = (year) => {
    setYear(year);
  };

  const filteredData = data.filter((expense) => {
    return expense.date.includes(year);
  });

  return (
    <>
      <Navbar />
      <Form getNewData={getNewData} />
      <Filter year={getYear} />
      <ExpenseContainer expenses={filteredData} />
    </>
  );
};

export default App;
