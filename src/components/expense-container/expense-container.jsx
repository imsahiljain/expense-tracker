import { Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ExpenseCard from "../expense-card/expense-card";

const ExpenseContainer = (props) => {
  return (
    <div>
      {props.expenses.length === 0 && (
        <Center>
          <Text fontSize="md" fontFamily="Inter" mt="150px" color="gray.400">
            No expense found this year. Add from above, if any.
          </Text>
        </Center>
      )}
      {props.expenses.length > 0 &&
        props.expenses.map((expense) => {
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
