import { Image, Text, View } from "react-native";
import ArticlesInterface from "@/interfaces/articlesInterface";
import CardContainer from "./CardContainer";
const imageNotFound = require("../assets/images/undraw_photo_895y.png");

interface NewsCardProps {
  newsItem: ArticlesInterface;
}
const NewsCard = ({ newsItem }: NewsCardProps) => {
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
        <Text className="text-3xl text-blueBlack font-extrabold">
          {newsItem.title}
        </Text>
      </View>
    </CardContainer>
  );
};

export default NewsCard;
