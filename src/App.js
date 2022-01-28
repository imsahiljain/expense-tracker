import React from "react";
import Navbar from "./components/navbar/navbar";
import Form from "./components/form/form";
import ExpenseContainer from "./components/expense-container/expense-container";

function App() {
  return (
    <>
      <Navbar />
      <Form />
      <ExpenseContainer />
    </>
  );
}

export default App;
