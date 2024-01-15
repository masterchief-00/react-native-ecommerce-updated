import {  FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Box, Heading, ScrollView } from "native-base";
import { StatusBar } from "expo-status-bar";
import OrderInfo from "../components/OrderInfo";
import OrderItem from "../components/OrderItem";
import OrderModel from "../components/OrderModel";

export default function OrderScreen() {
  return (
    <Box bg="#e5f2e5" flex={1} pt={6} safeAreaTop>
      <StatusBar backgroundColor="transparent" style="dark" />
      <Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <OrderInfo
            success={true}
            title="SHIPPING INFO"
            subTitle="Shipping: Rwanda"
            text="Payment: Payoneer"
            icon={<FontAwesome5 name="shipping-fast" size={24} color="white" />}
          />

          <OrderInfo
            danger={true}
            title="DELIVERY INFO"
            subTitle="Address:"
            text="Kigali, Nyarugenge, P.O Box 123"
            icon={<Ionicons name="location-sharp" size={24} color="white" />}
          />
        </ScrollView>
      </Box>
      <Box px={6} pb={3} flex={1}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        <OrderModel />
      </Box>
    </Box>
  );
}
