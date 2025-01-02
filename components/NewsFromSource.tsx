import NewsContainer from "./NewsContainer";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import NewsCard from "./NewsCard";
import { ScrollView } from "react-native";

const NewsFromSource = () => {
  const dispatch = useAppDispatch();
  const { selectedSource, newsInSelectedSource, pages } = useAppSelector(
    (state) => state.newsByCategory
  );
  // useEffect(() => {
  //   dispatch(fetchMoreNews({ pages, source: selectedSource }));
  // }, [pages, selectedSource]);
  return (
    <ScrollView className="pb-6">
      <NewsContainer title={`News In ${selectedSource}`}>
        {newsInSelectedSource.map((item, index) => (
          <NewsCard key={index} newsItem={item} />
        ))}
      </NewsContainer>
    </ScrollView>
  );
};

export default NewsFromSource;
