import { Box, Center, Heading, Icon, Text } from "native-base";
import React from "react";

export default function OrderInfo(
  {icon,
  title,
  subTitle,
  text,
  success,
  danger}
) {
  return (
    <Center
      bg="white"
      w={200}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
      py={4}
    >
      <Center bg="#009580" w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading bold fontSize={12} isTruncated mt={3} mb={2} color="black">
        {title}
      </Heading>
      <Text fontSize={13} color="black">
        {subTitle}
      </Text>
      <Text fontSize={13} italic textAlign="center" color="black">
        {text}
      </Text>
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg="#00719c">
          <Text fontSize={12} color="white">
            Paid on Jan 12 2019
          </Text>
        </Center>
      )}
      {danger && (
        <Center py={2} mt={2} rounded={5} w="full" bg="#cc0000">
          <Text fontSize={12} color="white">
            Not delivered
          </Text>
        </Center>
      )}
    </Center>
  );
}
