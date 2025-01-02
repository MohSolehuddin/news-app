import NewsContainer from "./NewsContainer";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import NewsCard from "./NewsCard";
import { ScrollView, Text } from "react-native";
import { useState } from "react";
import { loadMoreNewsInSource } from "@/redux/features/newsSlice";

const NewsFromSource = () => {
  const dispatch = useAppDispatch();
  const { selectedSource, newsInSelectedSource, pages, isPagingLimit } =
    useAppSelector((state) => state.newsByCategory);
  const [loading, setLoading] = useState(false);

  const loadMoreNews = () => {
    if (!loading) {
      setLoading(true);
      dispatch(loadMoreNewsInSource({ source: selectedSource.id, pages })).then(
        () => {
          setLoading(false);
        }
      );
    }
  };

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (newsInSelectedSource.length < 20 || isPagingLimit) return;
    if (isAtBottom) {
      loadMoreNews();
    }
  };

  return (
    <ScrollView
      className="pb-6"
      onScroll={handleScroll}
      scrollEventThrottle={16}>
      <NewsContainer title={`News In ${selectedSource.name}`}>
        {newsInSelectedSource.map((item, index) => (
          <NewsCard key={index} newsItem={item} />
        ))}
        {loading && <Text>Loading...</Text>}
      </NewsContainer>
    </ScrollView>
  );
};

export default NewsFromSource;
