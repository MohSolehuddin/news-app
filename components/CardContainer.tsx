import { View } from "react-native";
import React from "react";
interface CardContainerProps {
  children: React.ReactNode;
}
const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <View className="w-full h-48 bg-whiteGrey rounded-md">{children}</View>
  );
};

export default CardContainer;
