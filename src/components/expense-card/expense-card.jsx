import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

const ExpenseCard = ({ expenseName, amount, date }) => {
  return (
    <Flex mt={5} w="full" alignItems="center" justifyContent="center">
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="xl"
        shadow="xl"
        w="500px"
        border="1px solid"
        borderColor={useColorModeValue("gray.300", "gray.700")}
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
            fontFamily="inter"
          >
            {date}
          </chakra.span>
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Heading
            className="navHeading"
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            fontFamily="inter"
          >
            {expenseName}
          </Heading>
          <chakra.p
            color={useColorModeValue("gray.600", "gray.300")}
            fontSize="xl"
            lineHeight="2.8"
            fontFamily="inter"
            ml="100"
          >
            &#8377;{amount}
          </chakra.p>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ExpenseCard;
