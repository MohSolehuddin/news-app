import FilterCategories from "@/components/FilterCategories";
import NewsCard from "@/components/NewsCard";
import NewsContainer from "@/components/NewsContainer";
import SafeAreaShell from "@/components/SafeAreaShell";
import SearchInput from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
const index = () => {
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
    console.log(activeCategory);
  }, [activeCategory]);

  return (
    <SafeAreaShell isScrollView={false}>
      <View className="fixed top-0 left-0 z-50 h-36 w-full">
        <FilterCategories
          categories={categories}
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <SearchInput />
      </View>
      <ScrollView>
        <NewsContainer title="Latest News">
          {categories.map((item) => (
            <NewsCard key={item}>
              <Text>{item}</Text>
            </NewsCard>
          ))}
        </NewsContainer>
      </ScrollView>
    </SafeAreaShell>
  );
};

export default index;
