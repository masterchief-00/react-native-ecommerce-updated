import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Box, Image, Button, VStack, Input, Pressable } from "native-base";

import React from "react";

export default function RegisterScreen({ navigation }) {
  return (
    <Box flex={1} bg="white">
      <StatusBar backgroundColor="transparent" style="light" />
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../assets/cover02.jpg")}
      />
      <View
        style={{
          position: "absolute",
          top: 120,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          marginLeft: 35,
          width: "80%",
          borderRadius: 10,
          shadowRadius: 16,
          shadowColor: "black",
          shadowOpacity: 1,
          shadowOffset: { width: 0, height: 2 },
          elevation: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 30,
            padding: 20,
          }}
        >
          SIGN UP
        </Text>
        <VStack space={5} pt="6" justifyContent="center" alignItems="center">
          <Input
            InputLeftElement={
              <FontAwesome5 name="user-alt" size={24} color="black" />
            }
            variant="underlined"
            placeholder="John Doe"
            w="90%"
            color="black"
            borderBottomColor="black"
            textAlign="center"
            pl={2}
            type="text"
          />
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={24} color="black" />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="90%"
            color="black"
            borderBottomColor="black"
            textAlign="center"
            pl={2}
            type="text"
          />
          <Input
            InputLeftElement={<AntDesign name="eye" size={24} color="black" />}
            variant="underlined"
            placeholder="Password"
            w="90%"
            color="black"
            borderBottomColor="black"
            textAlign="center"
            pl={2}
            type="password"
          />
        </VStack>
        <Button my={30} w={40} rounded={50} bg="black" onPress={()=>navigation.navigate('BottomNav')}>
          Sign up
        </Button>
        <Pressable mt={4} onPress={()=>navigation.navigate('Login')}>
          <Text style={{ color: "green" }}>Login</Text>
        </Pressable>
      </View>
    </Box>
  );
}
