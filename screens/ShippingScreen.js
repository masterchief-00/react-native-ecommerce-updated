import React from "react";
import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const shippingInputs = [
  {
    label: "CITY",
    type: "text",
  },
  {
    label: "COUNTRY",
    type: "text",
  },
  {
    label: "POSTAL CODE",
    type: "text",
  },
  {
    label: "ADDRESS",
    type: "text",
  },
];
export default function ShippingScreen() {
  const navigation=useNavigation()
  return (
    <Box flex={1} safeAreaTop bg="#009580" py={5}>
      <StatusBar backgroundColor="transparent" style="light" />

      <Center pb={15}>
        <Text color="white" fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      <Box h="full" bg="white" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {shippingInputs.map((input, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {input.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor="#009580"
                  py={4}
                  color="#009580"
                  bg="#e5f2e5"
                  type={input.type}
                  _focus={{
                    borderWidth: 0.7,
                  }}
                />
              </FormControl>
            ))}
            <CustomButton onPress={()=>navigation.navigate('Checkout')} children="CONTINUE" color="white" bg="#009580" mt={10} />
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
