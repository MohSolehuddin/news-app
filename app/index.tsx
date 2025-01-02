import FilterCategories from "@/components/FilterCategories";
import ModalContainer from "@/components/ModalContainer";
import NewsCard from "@/components/NewsCard";
import NewsContainer from "@/components/NewsContainer";
import NewsFromSource from "@/components/NewsFromSource";
import SafeAreaShell from "@/components/SafeAreaShell";
import SearchInput from "@/components/SearchInput";
import SourceCard from "@/components/SourceCard";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import {
  fetchAllSources,
  lastNewsInCountry,
  searchNews,
  setSelectedSource,
  fetchNewsFromSource,
  moreLastNewsInCountry,
} from "@/redux/features/newsSlice";
import { SourceInterface } from "@/redux/features/sourceInterface";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const Index = () => {
  const dispatch = useAppDispatch();
  const {
    newsByCategory,
    sources,
    pages,
    selectedSource,
    isPagingLimit,
    loading,
  } = useAppSelector((state) => state.newsByCategory);
  const [isModalNewsBySourceOpen, setIsModalNewsBySourceOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    dispatch(fetchAllSources());
    dispatch(lastNewsInCountry());
  }, []);

  const handleSearch = (text: string) => {
    setActiveCategory("");
    if (text.trim() === "") {
      dispatch(lastNewsInCountry());
      return;
    }
    dispatch(searchNews(text));
  };

  const onSourceSelect = (source: SourceInterface) => {
    dispatch(setSelectedSource(source));
  };

  useEffect(() => {
    const getNewsBySource = async () => {
      await dispatch(
        fetchNewsFromSource({ pages: 0, source: selectedSource.id })
      );
    };
    console.log(selectedSource);
    if (selectedSource.id) {
      getNewsBySource();
      setIsModalNewsBySourceOpen(true);
    }
  }, [selectedSource]);

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (newsByCategory.length < 20 || isPagingLimit) return;

    if (isAtBottom && !isLoading) {
      setIsLoading(true);
      dispatch(moreLastNewsInCountry(pages)).then(() => {
        setIsLoading(false);
      });
    }
  };
  return (
    <SafeAreaShell isScrollView={false}>
      <View className="fixed top-0 left-0 z-50 h-36 w-full">
        <FilterCategories
          categories={categories}
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <SearchInput onSubmit={handleSearch} />
      </View>
      <ScrollView
        className="h-4/5"
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <NewsContainer
          title={
            activeCategory
              ? `Source in category ${activeCategory}`
              : "Latest News"
          }>
          {!activeCategory && (
            <>
              {newsByCategory.map((item, index) => (
                <NewsCard key={index} newsItem={item} />
              ))}
              {loading == "pending" && (
                <Text className="text-center">Loading...</Text>
              )}
              {isPagingLimit && (
                <Text className="text-center">No more news</Text>
              )}
            </>
          )}

          {activeCategory &&
            sources
              .filter((item) => item.category === activeCategory)
              .map((item, index) => (
                <SourceCard
                  key={index}
                  source={item}
                  onSelect={onSourceSelect}
                />
              ))}
        </NewsContainer>
      </ScrollView>
      <ModalContainer
        isOpen={isModalNewsBySourceOpen}
        setIsOpen={setIsModalNewsBySourceOpen}>
        <NewsFromSource />
      </ModalContainer>
    </SafeAreaShell>
  );
};

export default Index;
