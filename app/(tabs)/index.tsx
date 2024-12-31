import FilterCategories from "@/components/FilterCategories";
import NewsCard from "@/components/NewsCard";
import NewsContainer from "@/components/NewsContainer";
import SafeAreaShell from "@/components/SafeAreaShell";
import SearchInput from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { Text } from "react-native";

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
    <SafeAreaShell>
      <FilterCategories
        categories={categories}
        activeCategory={activeCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <SearchInput />
      <NewsContainer title="Latest News">
        <NewsCard>
          <Text>News</Text>
        </NewsCard>
      </NewsContainer>
    </SafeAreaShell>
  );
};

export default index;
