import React from "react";
import {
  Select,
  Flex,
  Heading,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

const Filter = (props) => {
  const handleYearFilter = (event) => {
    props.year(event.target.value);
  };
  return (
    <>
      <Flex mt={5} w="full" alignItems="center" justifyContent="center">
        <Box
          mx="auto"
          px={8}
          py={4}
          w="500px"
          bg={useColorModeValue("white", "gray.800")}
          maxW="2xl"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Heading
              className="navHeading"
              fontSize="xl"
              bg={useColorModeValue("white", "gray.800")}
              fontWeight="700"
              fontFamily="inter"
              mb="1"
            >
              Filter by year
            </Heading>
            <Select
              onChange={handleYearFilter}
              placeholder="Select year"
              width="100"
              fontFamily="inter"
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </Select>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Filter;
