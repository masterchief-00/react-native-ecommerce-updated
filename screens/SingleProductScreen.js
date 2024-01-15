import React, { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import CustomButton from "../components/CustomButton";
import Review from "../components/Review";
import { useNavigation } from "@react-navigation/native";

export default function SingleProductScreen({ route }) {
  const [value, setvalue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg="white">
      <StatusBar backgroundColor="transparent" style="dark" />
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          resizeMode="contain"
          alt="image"
          w="full"
          h={250}
        />
        <Heading bold fontSize={20} mt={8} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating
          value={product.rating}
          reviews={product.numReviews}
          showReviews={true}
        />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              minValue={0}
              maxValue={product.countInStock}
              rounded
              borderColor="#ddd"
              textColor="black"
              leftButtonBackgroundColor="#009580"
              rightButtonBackgroundColor="#009580"
              iconStyle={{ color: "white" }}
            />
          ) : (
            <Heading bold color="#f44336" italic fontSize={15}>
              Out of stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color="black" fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={15}>
          {product.description}
        </Text>
        <CustomButton color="white" bg="#009580" mt={10}>
          Add to cart
        </CustomButton>
        <Review />
      </ScrollView>
    </Box>
  );
}
