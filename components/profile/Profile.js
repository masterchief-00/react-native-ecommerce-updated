import React from "react";
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import CustomButton from "../CustomButton";

const inputs = [
  {
    label: "Username",
    type: "text",
  },
  {
    label: "Email",
    type: "text",
  },
  {
    label: "New password",
    type: "password",
  },
  {
    label: "Confirm password",
    type: "password",
  },
];
export default function Profile() {
  return (
    <Box h="full" bg="white" px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {inputs.map((input, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                {input.label}
              </FormControl.Label>
              <Input
                borderWidth={0.7}
                bg="#e5f2e5"
                py={3}
                color="#009580"
                fontSize={18}
                _focus={{
                  bg: "#e5f2e5",
                  borderColor: "#009580",
                }}
                type={input.type}
              />
            </FormControl>
          ))}
          <CustomButton children="UPDATE PROFILE" bg="#009580" color="white" />
        </VStack>
      </ScrollView>
    </Box>
  );
}
