import { View } from "react-native";
import React from "react";
interface CardContainerProps {
  children: React.ReactNode;
}
const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <View className="w-full h-fit relative bg-white pb-6 rounded-3xl flex gap-6">
      {children}
    </View>
  );
};

export default CardContainer;
