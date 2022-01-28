import React from "react";
import { Flex, Spacer, Box, Heading, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import "../navbar/navbar.css";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex boxShadow="md">
      <Box p="2" m="4">
        <Heading className="navHeading" fontFamily="Inter" fontSize="2xl">
          Expense Tracker
        </Heading>
      </Box>
      <Spacer />
      <Box m="5">
        <IconButton mr="4" aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </Box>
    </Flex>
  );
};

export default Navbar;
