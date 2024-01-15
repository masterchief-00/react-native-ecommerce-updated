import React from "react";
import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  {
    image: require("../assets/PayPal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../assets/discover.jpg"),
    alt: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../assets/googleplay.png"),
    alt: "googleplay",
    icon: "fontAwesome",
  },
  {
    image: require("../assets/payoneer.png"),
    alt: "payoneer",
    icon: "fontAwesome",
  },
];

export default function PaymentScreen() {
  const navigation=useNavigation()
  return (
    <Box flex={1} safeAreaTop bg="#009580" py={5}>
      <StatusBar backgroundColor="transparent" style="light" />

      <Center pb={15}>
        <Text color="white" fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      <Box h="full" bg="#e5f2e5" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((method, index) => (
              <HStack
                alignItems="center"
                justifyContent="space-between"
                bg="white"
                px={3}
                py={1}
                rounded={10}
                key={index}
              >
                <Box>
                  <Image
                    source={method.image}
                    w={60}
                    h={50}
                    resizeMode="contain"
                    alt={method.alt}
                  />
                </Box>
                {method.icon === "Ionicons" ? (
                  <Ionicons name="checkmark-circle" size={24} color="#009580" />
                ) : (
                  <FontAwesome name="circle-thin" size={24} color="#009580" />
                )}
              </HStack>
            ))}

            <CustomButton
            onPress={()=>navigation.navigate('Placeorder')}
              children="CONTINUE"
              color="white"
              bg="#009580"
              mt={10}
            />
            <Text italic textAlign='center'>Payment method is <Text bold>PayPal</Text> by default</Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
