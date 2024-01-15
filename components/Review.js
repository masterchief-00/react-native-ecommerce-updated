import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Rating from "./Rating";
import Message from "./Message";
import CustomButton from "./CustomButton";

export default function Review() {
  const gibberish =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati reprehenderit porro";
  const gibberishReview =
    "Shit product, no words can describe how terrible this experience is....I am pissed off!";
  const [rating, setRating] = useState("");

  return (
    <Box my={9}>
      <Heading bold fontSize={23} mb={3}>
        Reviews
      </Heading>
      <Message
        color="#008000"
        bg="#e5f2e5"
        size={15}
        children="No reviews yet"
      />

      <Box p={3} bg="#cce5cc" mt={5} rounded="md">
        <Heading fontSize={15} color="black">
          John Doe
        </Heading>
        <Rating value={4.5} />
        <Text mt={2} mb={1} fontSize={10}>
          12/01/2022
        </Text>
        <Message color="black" bg="#e5f2e5" size={12} children={gibberish} />
      </Box>
      <Box mt={6}>
        <Heading fontSize={18} color="black">
          Write review
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg="#e5f2e5"
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose rating"
              _selectedItem={{
                bg: "#e5f2e5",
                endIcon: <CheckIcon size={5} />,
              }}
              onValueChange={(e) => setRating(e)}
              selectedValue={rating}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Not good" value="2" />
              <Select.Item label="3 - Fair" value="3" />
              <Select.Item label="4 - Great but..." value="4" />
              <Select.Item label="5 - Fantabulous" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={20}
              w="full"
              placeholder="The product is okay..."
              borderWidth={0}
              bg="#e5f2e5"
              py={2}
            />
          </FormControl>
          <CustomButton bg="#009580" color="white">
            Submit
          </CustomButton>
          <Message
            color="#008000"
            bg="#e5f2e5"
            size={15}
            children="Please login to review this product"
          />
        </VStack>
      </Box>
    </Box>
  );
}
