import React from "react";
import { Center, Heading, Image, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import Tabs from "../components/profile/Tabs";

export default function ProfileScreen() {
  return (
    <>
      <StatusBar backgroundColor="transparent" style="light" />
      <Center bg="#009580" pt={10} pb={6}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          alt="profile-img"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold isTruncated my={2} color='white'>John Doe</Heading>
        <Text italic fontSize={10} color='white'>Joined 12/01/2019</Text>
      </Center>
      <Tabs />
    </>
  );
}
