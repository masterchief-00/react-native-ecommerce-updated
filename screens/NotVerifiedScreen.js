import { View, Text } from "react-native";
import React from "react";
import { Box, Center, Image, VStack } from "native-base";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";

export default function NotVerifiedScreen() {
  return (
    <Box flex={1} bg="#fff" safeAreaTop>
      <StatusBar backgroundColor="transparent" style="dark" />
      <Center w="full" h={250}>
        <Image source={require("../assets/favicon.png")} alt="logo" size="lg" />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <CustomButton bg="#009580" color="white">
          Register
        </CustomButton>
        <CustomButton bg="black" color="white">
          Login
        </CustomButton>
      </VStack>
    </Box>
  );
}
