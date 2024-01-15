import React, { useState } from "react";
import { Center, HStack, Modal, VStack, Text, Button } from "native-base";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function PlaceOrderModel() {
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
        bg="black"
        children="SHOW TOTAL"
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
            <Button
              flex={1}
              bg="#009580"
              h={45}
              _text={{
                color: "white",
              }}
              onPress={() => {
                setShowModel(false);
                navigation.navigate("Order");
              }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
