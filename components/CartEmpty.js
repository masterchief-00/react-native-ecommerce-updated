import { Box, Center, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import CustomButton from "./CustomButton";

export default function CartEmpty() {
  return (
    <Box>
      <Center h="90%">
        <Center w={200} h={200} bg="white" rounded="full">
          <FontAwesome name="shopping-basket" size={64} color="#009580" />
        </Center>
        <Text color="#009580" fontSize={20} bold mt={5}>
          Cart is empty!
        </Text>
      </Center>

      <Center marginBottom={-10}>
        <CustomButton bg="black" color="white" children="START SHOPPING" />
      </Center>
    </Box>
  );
}
