import { View, Text } from "react-native";

interface NewsContainerProps {
  title: string;
  children: React.ReactNode;
}
const NewsContainer = ({
  children,
  title = "Latest News",
}: NewsContainerProps) => {
  return (
    <View className="flex gap-4">
      <Text className="text-2xl text-deepDarkBlue font-bold">{title}</Text>
      {children}
    </View>
  );
};

export default NewsContainer;
