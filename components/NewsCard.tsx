import { Image } from "react-native";
import React from "react";
import ArticlesInterface from "@/interfaces/articlesInterface";
import CardContainer from "./CardContainer";

interface NewsCardProps {
  children: React.ReactNode;
  newsItem: ArticlesInterface;
}
const NewsCard = ({ children, newsItem }: NewsCardProps) => {
  return (
    <CardContainer>
      <Image src={newsItem.urlToImage} />
      {children}
    </CardContainer>
  );
};

export default NewsCard;
