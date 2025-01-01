import { Image, Text, View } from "react-native";
import React from "react";
import ArticlesInterface from "@/interfaces/articlesInterface";
import CardContainer from "./CardContainer";
const imageNotFound = require("../assets/images/undraw_photo_895y.png");

interface NewsCardProps {
  children: React.ReactNode;
  newsItem: ArticlesInterface;
}

const NewsCard = ({ children, newsItem }: NewsCardProps) => {
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
          source={imageNotFound} // Use the imported image
          style={{ width: "100%", height: 300 }}
        />
      )}
      <View className="bg-white px-6 z-50">
        <Text className="text-3xl text-blueBlack font-extrabold">
          {newsItem.title}
        </Text>
        {/* Uncomment if you want to display additional information
        <Text className="text-3xl text-bluishWhite">
          Author: {newsItem.author}
        </Text>
        <Text className="text-3xl text-bluishWhite">
          Content: {newsItem.content}
        </Text>
        <Text className="text-3xl text-bluishWhite">
          Description: {newsItem.description}
        </Text>
        <Text className="text-3xl text-bluishWhite">
          Source ID: {newsItem.source.id}
        </Text>
        <Text className="text-3xl text-bluishWhite">
          Source Name: {newsItem.source.name}
        </Text>
        */}
      </View>
      {/* {children} */}
    </CardContainer>
  );
};

export default NewsCard;
