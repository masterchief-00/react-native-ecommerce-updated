import { MaterialIcons } from "@expo/vector-icons";

import React from "react";
import { HStack, Text } from "native-base";

export default function Rating({ value, reviews, showReviews }) {
  return (
    <HStack opacity={0.6} space={0.4} mt={1} alignItems="center">
      <MaterialIcons
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      <MaterialIcons
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      <MaterialIcons
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      <MaterialIcons
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      <MaterialIcons
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      {showReviews && (
        <Text marginLeft={2} fontSize={12} italic>
          {reviews} review(s){" "}
        </Text>
      )}
    </HStack>
  );
}
