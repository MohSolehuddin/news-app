import CardContainer from "@/components/CardContainer";
import FilterCategories from "@/components/FilterCategories";
import NewsCard from "@/components/NewsCard";
import NewsContainer from "@/components/NewsContainer";
import SafeAreaShell from "@/components/SafeAreaShell";
import SearchInput from "@/components/SearchInput";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import {
  fetchAllSources,
  lastNewsInCountry,
  searchNews,
} from "@/redux/features/newsSlice";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
const index = () => {
  const dispatch = useAppDispatch();
  const { newsByCategory, sources } = useAppSelector(
    (state) => state.newsByCategory
  );
  const [activeCategory, setActiveCategory] = useState("");
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
    dispatch(searchNews(text));
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
      <ScrollView className="h-4/5">
        <NewsContainer title="Latest News">
          {!activeCategory &&
            newsByCategory.map((item, index) => (
              <NewsCard key={index} newsItem={item}>
                <Text>{item.title}</Text>
              </NewsCard>
            ))}
          {!activeCategory && (
            <Text>For the latest news, only showing 20 news</Text>
          )}
          {activeCategory &&
            sources
              .filter((item) => item.category === activeCategory)
              .map((item, index) => (
                <CardContainer key={index}>
                  <Text>{item.name}</Text>
                </CardContainer>
              ))}
        </NewsContainer>
      </ScrollView>
    </SafeAreaShell>
  );
};

export default index;
