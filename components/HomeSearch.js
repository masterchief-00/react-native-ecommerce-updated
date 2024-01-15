import { Box, HStack, Input, Pressable, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeSearch() {
  const navigation=useNavigation()
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg="#009580"
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Nike, Puma, Adidas..."
        w="85%"
        bg="#009580"
        type="search"
        variant='underlined'
        h={12}
        borderColor='white'
        borderWidth={0}
        borderBottomWidth={2}
        textAlign="center"
        color='white'
        placeholderTextColor='white'
        _focus={{
            bg:'#006c63',
            borderColor:'white'
        }}
      />
      <Pressable ml={2} onPress={()=>navigation.navigate('Cart')}>
        <FontAwesome name="shopping-basket" size={24} color="white" />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-10}
          left={4}
          bg="#ff0000"
          _text={{
            color: "white",
            fontSize: "11px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}
