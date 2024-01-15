import { View, Text } from "react-native";
import React from "react";
import { Box } from "native-base";
import { StatusBar } from "expo-status-bar";
import HomeSearch from "../components/HomeSearch";
import HomeProducts from "../components/HomeProducts";

export default function HomeScreen() {
  return (
    <Box flex={1}>
      <StatusBar backgroundColor="transparent" style="light" />
        <HomeSearch />
        <HomeProducts />
    </Box>
  );
}
