import {
  Box,
  Center,
  HStack,
  Image,
  Text,
  Pressable,
  VStack,
  Button,
} from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { products } from "../data/Product";
import { FontAwesome } from "@expo/vector-icons";

export default function CartItems() {
  const Swiper = () => (
    <SwipeListView
      rightOpenValue={-40}
      previewRowKey={"0"}
      previewOpenValue={-50}
      previewOpenDelay={3000}
      data={products}
      renderHiddenItem={renderHiddenItems}
      renderItem={renderItems}
      showsVerticalScrollIndicator={false}
    />
  );

  const renderItems = (data) => (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems="center"
          bg="white"
          shadow="1"
          rounded={10}
          overflow="hidden"
          p={3}
        >
          <Center w="25%" bg="white">
            <Image
              source={{ uri: data.item.image }}
              alt={data.item.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
          </Center>
          <VStack w="60%" px={2} space={2}>
            <Text isTruncated color="black" bold fontSize={14}>
              {data.item.name}
            </Text>
            <Text color='#aaa'>${data.item.price}</Text>
          </VStack>
          <Center>
              <Button bg='#009580'>4</Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
  const renderHiddenItems = () => (
    <Pressable
      roundedTopRight={10}
      roundedBottomRight={10}
      h="91%"
      w={50}
      ml="auto"
      justifyContent="center"
      bg="#d62d20"
    >
      <Center alignItems="center" space={2}>
        <FontAwesome name="trash" size={24} color="white" />
      </Center>
    </Pressable>
  );
  return (
    <Box flex={1} mr={6}>
      <Swiper />
    </Box>
  );
}
