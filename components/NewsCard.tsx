import { View } from "react-native";
import React from "react";

interface NewsCardProps {
  children: React.ReactNode;
}
const NewsCard = ({ children }: NewsCardProps) => {
  return (
    <View className="w-full h-48 bg-whiteGrey rounded-md">{children}</View>
  );
};

export default NewsCard;
