import React from "react";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const navigation=useNavigation()
  return (
    <Box safeArea flex={1} bg="#e5f2e5">
      <StatusBar backgroundColor="transparent" style="dark" />
      <Center w="full" py={5}>
        <Text color="black" fontSize={20} bold>
          Cart
        </Text>
        {/* <CartEmpty /> */}
      </Center>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <CartItems />
        <Center mt={5}>
          <HStack
            justifyContent="space-between"
            bg="white"
            w="90%"
            pl={5}
            h={55}
            alignItems="center"
            shadow={2}
            rounded={50}
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={55}
              rounded={50}
              bg="#009580"
              _text={{
                color: "white",
                fontWeight: "semibold",
              }}
            >
              $198
            </Button>
          </HStack>
        </Center>
        <Center mb={10} px={5}>
          <CustomButton onPress={()=>navigation.navigate('Shipping')} bg="black" color="white" children="CHECKOUT" mt={6} />
        </Center>
      </ScrollView>
    </Box>
  );
}
