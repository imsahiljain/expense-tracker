import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Form = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const toast = useToast();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const nameOnChange = (event) => {
    setName(event.target.value);
  };

  const amountOnChange = (event) => {
    setAmount(event.target.value);
  };

  const dateOnChange = (event) => {
    setDate(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newExpenseData = {
      name: name,
      amount: amount,
      date: new Date(date).toLocaleString("en-GB").slice(0, 10),
    };
    props.getNewData(newExpenseData);
    onClose();
    toast({
      title: "New Expense Added.",
      description: "Your new expense has been added successfully.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    setName("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <Center mt="20">
        <Button
          onClick={onOpen}
          fontSize="18px"
          letterSpacing="-0.01em"
          fontWeight="500"
          mb="10"
        >
          <AddIcon w={3} h={3} mr="2" mb=".5" fontWeight="semibold" />
          Add new expense
        </Button>
      </Center>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily="Inter">Add new expense</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={handleOnSubmit}>
            <ModalBody pb={6} fontFamily="Inter">
              <FormControl isRequired>
                <FormLabel>Expense Name</FormLabel>
                <Input
                  ref={initialRef}
                  value={name}
                  onChange={nameOnChange}
                  placeholder="Grocery"
                  isRequired
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Amount</FormLabel>
                <Input
                  placeholder="&#8377;300"
                  value={amount}
                  onChange={amountOnChange}
                  type="number"
                  isRequired
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Date</FormLabel>
                <Input
                  placeholder="Date"
                  value={date}
                  onChange={dateOnChange}
                  type="date"
                  isRequired
                />
              </FormControl>
            </ModalBody>

            <ModalFooter fontFamily="Inter">
              <Button colorScheme="blue" mr={3} type="submit">
                Add expense
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Form;
