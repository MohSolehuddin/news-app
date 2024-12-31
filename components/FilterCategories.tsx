import { View, Text, TouchableOpacity, ScrollView } from "react-native";
interface FilterCategoriesProps {
  categories: string[];
  activeCategory: string;
  handleCategoryClick: (category: string) => void;
}
const FilterCategories = ({
  categories,
  activeCategory,
  handleCategoryClick,
}: FilterCategoriesProps) => {
  return (
    <ScrollView className="pt-4 bg-bluishWhite h-full w-full" horizontal={true}>
      <View className="flex flex-row gap-4 mb-6 h-full">
        {categories.map((item) => (
          <TouchableOpacity
            className="w-24"
            key={item}
            onPress={() => handleCategoryClick(item)}>
            <Text className="font-bold text-center">{item}</Text>
            {item === activeCategory && (
              <View className="w-full h-[4px] bg-whiteGrey rounded-md"></View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default FilterCategories;
