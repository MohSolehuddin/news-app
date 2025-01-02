import { Image, Text, TouchableOpacity, View } from "react-native";
import ArticlesInterface from "@/interfaces/articlesInterface";
import CardContainer from "./CardContainer";
const imageNotFound = require("../assets/images/undraw_photo_895y.png");

interface NewsCardProps {
  newsItem: ArticlesInterface;
  onPress?: (link: string) => void;
}
const NewsCard = ({ newsItem, onPress }: NewsCardProps) => {
  return (
    <CardContainer>
      {newsItem.urlToImage ? (
        <Image
          className="rounded-xl"
          source={{ uri: newsItem.urlToImage }}
          style={{ width: "100%", height: 300 }}
        />
      ) : (
        <Image
          className="rounded-xl"
          source={imageNotFound}
          style={{ width: "100%", height: 300 }}
        />
      )}
      <View className="bg-white px-6 z-50">
        <Text className="text-xl text-blueBlack font-semibold">
          {newsItem.title}
        </Text>
        <TouchableOpacity
          className="mt-6 bg-blueBlack w-24 py-2 rounded-full"
          onPress={() => onPress?.(newsItem.url)}>
          <Text className="text-bluishWhite text-center text-xl font-bold">
            Show
          </Text>
        </TouchableOpacity>
      </View>
    </CardContainer>
  );
};

export default NewsCard;
