import React, { useState } from "react";
import {
  Center,
  HStack,
  Modal,
  VStack,
  Text,
  Button,
  Pressable,
  Image,
} from "native-base";
import CustomButton from "../components/CustomButton";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function OrderModel() {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();
  const orderInfos = [
    {
      title: "Products",
      price: 125.89,
      color: "black",
    },
    {
      title: "Shipping",
      price: 34.78,
      color: "black",
    },
    {
      title: "Tax",
      price: 25.89,
      color: "black",
    },
    {
      title: "Total amount",
      price: 265.49,
      color: "#009580",
    },
  ];
  return (
    <Center>
      <CustomButton
        onPress={() => setShowModel(true)}
        bg="#009580"
        children="SHOW PAYMENT & TOTAL"
        color="white"
        mt={5}
      />
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {orderInfos.map((item, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{item.title}</Text>
                  <Text color={item.color} bold fontSize={14}>
                    ${item.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg="#ffa13e"
              h={45}
              rounded={4}
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../assets/PayPal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={39}
              />
            </Pressable>
            <Button
              flex={1}
              bg="black"
              h={45}
              mt={3}
              _text={{
                color: "white",
              }}
              onPress={() => {
                setShowModel(false);
                navigation.navigate('BottomNav')
              }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
