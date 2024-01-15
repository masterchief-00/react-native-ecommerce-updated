import { Flex, ScrollView, Pressable, Image, Box } from "native-base";
import React from "react";
import { Text } from "react-native";
import { products } from "../data/Product";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

export default function HomeProducts() {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
            onPress={() => navigation.navigate("Single", product)}
            key={product._id}
            w="47%"
            bg="white"
            rounded="md"
            shadow={2}
            pt={0.4}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Text>{product.name}</Text>
              <Text style={{ color: "grey", textAlign: "right", fontSize: 10 }}>
                ${product.price}
              </Text>
              <Rating value={product.rating} reviews={product.numReviews} showReviews={false} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}
