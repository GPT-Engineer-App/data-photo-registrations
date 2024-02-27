import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Textarea, Image, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import { FaPlus, FaPaperclip } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    documentPhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documentPhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to the backend
    // For demonstration purposes, we'll just show a toast message
    toast({
      title: "Registration Submitted",
      description: "Your registration data has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="documentPhoto">Document Photo</FormLabel>
          <InputGroup>
            <Input type="file" id="documentPhoto" name="documentPhoto" accept="image/*" onChange={handleFileChange} hidden />
            <InputRightElement width="4.5rem">
              <Button as="label" htmlFor="documentPhoto" size="sm" rightIcon={<FaPaperclip />}>
                Attach
              </Button>
            </InputRightElement>
          </InputGroup>
          {formData.documentPhoto && <Image src={URL.createObjectURL(formData.documentPhoto)} alt="Document" boxSize="100px" objectFit="cover" mt={2} />}
        </FormControl>

        <Button type="submit" colorScheme="blue" leftIcon={<FaPlus />} isFullWidth>
          Submit Registration
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
