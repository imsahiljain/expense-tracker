import React from "react";
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

const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const toast = useToast();

  const toastOnClose = () => {
    onClose();
    toast({
      title: "New Expense Added.",
      description: "Your new expense has been added successfully.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
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

          <ModalBody pb={6} fontFamily="Inter">
            <FormControl isRequired>
              <FormLabel>Expense Name</FormLabel>
              <Input ref={initialRef} placeholder="Grocery" isRequired />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input placeholder="&#8377;300" type="number" isRequired />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Date</FormLabel>
              <Input placeholder="Date" type="date" isRequired />
            </FormControl>
          </ModalBody>

          <ModalFooter fontFamily="Inter">
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              onClick={toastOnClose}
            >
              Add expense
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Form;
