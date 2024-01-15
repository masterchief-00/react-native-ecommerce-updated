import React from "react";
import { Box, Button, HStack, ScrollView, Text } from "native-base";
import { Pressable } from "react-native";

export default function Order() {
  return (
    <Box h="full" bg="white" pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg="#e5f2e5"
            py={5}
            px={2}
          >
            <Text fontSize={9} color="#00b8ff" isTruncated>
              192939392929393939
            </Text>
            <Text fontSize={12} color="black" bold isTruncated>
              PAID
            </Text>
            <Text fontSize={11} color="black" italic isTruncated>
              Dec 12 2021
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg="#009580"
              _text={{
                color: "white",
              }}
              _pressed={{
                bg: "#009580",
              }}
            >
              $564
            </Button>
          </HStack>
        </Pressable>

        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg="#f9e5e5"
            py={5}
            px={2}
            mt={2}
          >
            <Text fontSize={9} color="#00b8ff" isTruncated>
              192939392929393939
            </Text>
            <Text fontSize={12} color="black" bold isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} color="black" italic isTruncated>
              Dec 12 2021
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg="#CC0000"
              _text={{
                color: "white",
              }}
              _pressed={{
                bg: "#CC0000",
              }}
            >
              $76
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
