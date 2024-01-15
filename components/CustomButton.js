import React from "react";
import { Button } from "native-base";

export default function CustomButton({ mt, bg, color, children, onPress }) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
      }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
