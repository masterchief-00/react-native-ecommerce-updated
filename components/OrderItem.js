import React from "react";
import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { products } from "../data/Product";

export default function OrderItem() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0,3)}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg="white"
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg="white" p={1}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color="black" bold fontSize={14}>
                  {item.name}
                </Text>
                <Text color="#a9a9a9" bold mt={2}>
                  ${item.price}
                </Text>
              </VStack>
              <Center><Button bg='#009580'>5</Button></Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
}
